const productIconKey = "images";

module.exports = {
  product: "Cloudflare Image Optimization",
  pathPrefix: "/images",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/images",
  logoSVGContent: '<svg width="48" height="48" version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M42 8.94H6L4.5 10.44V40.343L6 41.843H42L43.5 40.343V10.44L42 8.94ZM40.5 11.94V25.958L34.5 21.045 32.535 21.105 28.725 24.615 24.652 21.615 22.8 21.675 12.3 30.45 7.5 27.15V11.94H40.5ZM7.5 38.843V30.81L11.475 33.585 13.29 33.503 23.813 24.75 27.938 27.75 29.843 27.645 33.593 24.173 40.5 29.828V38.828L7.5 38.843ZM14.31 24.12C15.967 24.12 17.31 22.777 17.31 21.12 17.31 19.463 15.967 18.12 14.31 18.12 12.653 18.12 11.31 19.463 11.31 21.12 11.31 22.777 12.653 24.12 14.31 24.12Z"/></svg>',
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:images"]' },
  },
  siteMetadata: {
    title: "Cloudflare Image Optimization docs",
    description:
      "Choose between Cloudflare Images and Cloudflare Image Resizing, two products tailored to your different needs.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/images",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};