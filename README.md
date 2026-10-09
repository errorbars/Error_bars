# Field Notes

A magazine-style website for science articles on physics, math, chemistry and biology, with a shop page and a contact page. Built with [Eleventy](https://www.11ty.dev/) and published free on GitHub Pages.

Every article is a single Markdown file. Add one and it appears on the homepage, its subject page, and the "Keep reading" lists automatically.

---

## Turn the website on (one time)

1. In this repository on GitHub, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open the **Actions** tab. The "Deploy site" workflow runs after each change; when it shows a green tick, your site is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

From then on, every change you or a collaborator commits goes live in about a minute.

---

## Add an article (no installing anything)

You can do this entirely on github.com:

1. **Upload the photo.** Go to `src/images/articles/` → **Add file → Upload files**. Use a landscape photo, ideally at least 1600 pixels wide. Commit.
2. **Create the article.** Go to `src/articles/` → **Add file → Create new file**. Name it something like `physics-black-holes.md`. The file name becomes the web address.
3. **Paste the template** from [`article-template.md`](article-template.md) and fill it in. Make sure `image:` matches your photo's file name.
4. Click **Commit changes**. The site rebuilds itself.

### The fields at the top of an article

| Field | What it does |
|---|---|
| `title` | The headline |
| `dek` | The one-line summary under the headline and on cards |
| `subject` | `physics`, `math`, `chemistry` or `biology` |
| `author` | Shown as "By …" |
| `date` | `YYYY-MM-DD`. Newest articles appear first |
| `image` | The main photo, e.g. `/images/articles/my-photo.jpg` |
| `imageAlt` | A description of the photo for screen readers |
| `imageCaption`, `imageCredit` | Shown under the photo (optional) |
| `featured: true` | Makes this the big story at the top of the homepage |
| `draft: true` | Hides the article until you remove this line |

### Choosing the homepage's big story

Add `featured: true` to the article you want at the top, and remove it from the one that has it now (currently `physics-emc2.md`). If no article is featured, the newest one is used.

### Math

Write LaTeX between dollar signs: `$x^2$` for inline, `$$\frac{a}{b}$$` on its own line for a display equation. Equations are turned into proper math typesetting when the site builds.

---

## Replace the placeholder images

Every placeholder image has its file name printed in its top corner. To swap one, upload your photo **with exactly the same name** to the same folder and commit. No code changes needed.

| Folder | Used for | Good size |
|---|---|---|
| `src/images/articles/` | Article photos | 1600 × 1000, landscape |
| `src/images/subjects/` | Big banners on subject pages and the homepage subject tiles | 2000 × 900, landscape |
| `src/images/merch/` | Shop products | 1000 × 1000, square |
| `src/images/site/banner.jpg` | The "Publish it here" section on the homepage | 2000 × 900 |

Keep each photo under about 500 KB so pages load quickly ([squoosh.app](https://squoosh.app) compresses images for free). After replacing an article photo, update its `imageAlt`, `imageCaption` and `imageCredit` too.

---

## Change site details

| What | Where |
|---|---|
| Site name, tagline, email, social links | `src/_data/site.json` |
| Subject names, colors, banner text | `src/_data/subjects.json` |
| Shop products and prices | `src/_data/merch.json` |
| Colors, fonts, spacing | `src/css/style.css` |

### Make the contact form work

1. Create a free account at [formspree.io](https://formspree.io) and make a new form.
2. Copy the form ID (the part after `/f/` in its address).
3. Paste it as `formspreeId` in `src/_data/site.json`.

### Sell from the shop

The shop shows "Coming soon" until a product has a link. Set up products on a free storefront such as Ko-fi Shop or Payhip, then paste each product's page address into its `"link"` in `src/_data/merch.json`. The button changes to "Buy".

---

## Preview on your own computer (optional)

Only needed if you want to see changes before publishing.

1. Install [Node.js](https://nodejs.org) version 22 or newer.
2. In this folder, run `npm install` once.
3. Run `npm start` and open http://localhost:8080. The page refreshes as you edit.

---

## Use your own domain later

Buy a domain (around ₹800–1,200 a year for a `.com`), then in **Settings → Pages → Custom domain** enter it and follow GitHub's DNS instructions. Hosting stays free.

---

## Folder map

```
src/
  articles/         one .md file per article
  images/           all photos (articles, subjects, merch, site)
  _data/            site settings, subjects, shop products
  _includes/        page layouts, header, footer, card designs
  css/style.css     all styling
  index.njk         homepage
  subject.njk       the Physics / Math / Chemistry / Biology pages
  shop.njk, contact.njk, 404.njk
article-template.md copy this to start a new article
.github/workflows/  the automatic build-and-publish setup
```

Fonts: Schibsted Grotesk and Source Serif 4, both under the SIL Open Font License (see `src/fonts/`).
