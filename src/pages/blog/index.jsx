import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const Blog = ({data}) => {
  console.log(data)
  return (
    <Layout pageTitle={`我的博客文章`}>
       {
        data.allMdx.nodes.map((node)=>(
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
       }
    </Layout>
  )
}

export const query = graphql`
query  {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        date
        slug
      }
      id
    }
  }
}
`

export const Head = () => <Seo title="我的博客文章" />

export default Blog