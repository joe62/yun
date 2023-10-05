import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const Blog = ({data}) => {
  return (
    <Layout pageTitle={`Sourdough配方`}>
       {
        data.allRecipeJson.nodes.map(({id,name})=>(
          <article key={id}>
            <h4>
              <Link to={`/recipe/${id}`}>{name}</Link>
            </h4>
          </article>
        ))
       }
    </Layout>
  )
}

export const query = graphql`
query  {
  allRecipeJson {
    nodes {
      id
      name
    }
  }
}
`

export const Head = () => <Seo title="Sourdough配方" />

export default Blog