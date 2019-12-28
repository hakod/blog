module.exports = {
  pathPrefix: "/blog",
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Coding Blog`,
    author: `정범진`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/`,
      },
      {
        name: `github`,
        url: `https://github.com/hakod`,
      },
    ],
  },
}
