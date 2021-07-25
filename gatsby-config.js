// module.exports = ({
//   basePath = "/",
//   contentPath = "content/",
//   showThemeLogo = true,
//   theme = "dark-blue",
// }) => {

module.exports = {
  siteMetadata: {
    description: "Portfolio Site for Austin Casteel",
    locale: "en",
    showThemeLogo: false,
    title: "Austin Casteel | Project Manager",
    author: "Austin Casteel",
    image: "./src/themes/austin.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./tailwind.config")("dark-blue")),
          require("postcss-input-range"),
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: "content/",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
// }
