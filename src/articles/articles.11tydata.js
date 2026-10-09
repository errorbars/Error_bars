// Settings shared by every article in this folder
export default {
  layout: "layouts/article.njk",
  permalink: (data) => `/articles/${data.page.fileSlug}/`,
};
