/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    joe:`abc`,
    date:`2023-08-12`,
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp",`gatsby-transformer-json`,{
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: ["gatsby-remark-code-buttons","gatsby-remark-prismjs"],
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "blog",
      "path": `${__dirname}/blog`
    }
  },{
    resolve:`gatsby-source-filesystem`,
    options: {
      path:`${__dirname}/data/recipe`
    }
  },{
    resolve:`gatsby-source-filesystem`,
    options: {
      path:`${__dirname}/data/ingrType`
    }
  }]
};