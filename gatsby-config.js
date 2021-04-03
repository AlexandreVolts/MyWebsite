module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/files/`
      }
    },
  ],
  siteMetadata: {
    title: "Alexandre Cochet",
    description: "",
    copyright: "This website is copyright 2021 Alexandre Cochet",
    contact: "alexandre.cochet0@gmail.com"
  }
};
