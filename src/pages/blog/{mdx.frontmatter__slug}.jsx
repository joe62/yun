import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const BlogPost = ({data,children}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
   <Layout pageTitle={data.mdx.frontmatter.title}>
    <p>发表时间: {data.mdx.frontmatter.date}</p>
    <GatsbyImage
      image={image}
       alt={data.mdx.frontmatter.hero_image_alt}
    />
    <p>
      图片来源: {" "}
      <a href={data.mdx.frontmatter.hero_image_credit_link}>
        {data.mdx.frontmatter.hero_image_credit_text}
      </a>
    </p>
    <article>{children}</article>
   </Layout>
  )
}

export default BlogPost

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title}/>

export const query = graphql`
query ($id: String) {
  mdx(id: {eq:$id}) {
    frontmatter {
      date
      title
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image{
        childImageSharp{
          gatsbyImageData
        }
      }
    }
  }
}
`