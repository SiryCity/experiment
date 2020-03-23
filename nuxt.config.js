
module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "実験",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "実験です。" },
      // OGP test
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "sirycity" },
      { hid: "og:url", property: "og:url", content: "https://experiment-prod-env.web.app" },
      { hid: "og:title", property: "og:title", content: "実験" },
      { hid: "og:description", property: "og:description", content: "実験です。" },
      { hid: "og:image", property: "og:image", content: "https://experiment-prod-env.web.app/default.png" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the redirect-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/firebase"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/dotenv"],
  env: {
    MES: process.env.MES,
    META: process.env.META
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
