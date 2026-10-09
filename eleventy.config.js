import { readFileSync } from "node:fs";
import { HtmlBasePlugin } from "@11ty/eleventy";
import texmath from "markdown-it-texmath";
import katex from "katex";

const subjects = JSON.parse(readFileSync("./src/_data/subjects.json", "utf8"));

export default function (eleventyConfig) {
  // Makes every "/..." link work when the site lives at username.github.io/repo-name/
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Math in Markdown: $inline$ and $$display$$, rendered to HTML at build time
  eleventyConfig.amendLibrary("md", (md) => {
    md.use(texmath, {
      engine: katex,
      delimiters: "dollars",
      katexOptions: { throwOnError: false },
    });
  });

  // Files copied to the site as-is
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy({
    "node_modules/katex/dist/katex.min.css": "css/katex/katex.min.css",
    "node_modules/katex/dist/fonts/*.woff2": "css/katex/fonts",
  });

  // All published articles, newest first. Set `draft: true` in an article to hide it.
  eleventyConfig.addCollection("posts", (api) =>
    api
      .getFilteredByGlob("src/articles/*.md")
      .filter((p) => !p.data.draft)
      .sort((a, b) => b.date - a.date)
  );

  // Homepage slots: one hero, two cards, up to six in the "Latest" list
  eleventyConfig.addFilter("homeLayout", (posts) => {
    const hero = posts.find((p) => p.data.featured) || posts[0];
    const rest = posts.filter((p) => p !== hero);
    return { hero, cards: rest.slice(0, 2), latest: rest.slice(2, 8) };
  });

  eleventyConfig.addFilter("bySubject", (posts, slug) =>
    posts.filter((p) => p.data.subject === slug)
  );
  eleventyConfig.addFilter("without", (posts, url) =>
    posts.filter((p) => p.url !== url)
  );
  // Same-subject stories first, topped up with the newest from other subjects
  eleventyConfig.addFilter("related", (posts, url, slug, n = 3) => {
    const others = posts.filter((p) => p.url !== url);
    const same = others.filter((p) => p.data.subject === slug);
    const rest = others.filter((p) => p.data.subject !== slug);
    return [...same, ...rest].slice(0, n);
  });
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("subject", (slug) =>
    subjects.find((s) => s.slug === slug) || { slug, name: slug, color: "#999", ink: "#555" }
  );
  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    })
  );
  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));
  eleventyConfig.addFilter("readingTime", (html) => {
    const words = String(html || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 220)) + " min read";
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    // Articles are plain Markdown (no template code), so LaTeX braces never clash with templates
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
