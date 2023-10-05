import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import SourRecipeCalc from "../components/sourRecipeCalc"
import Brdclc from '../components/brdclc'
const IndexPage = () => {
  return (
   <Layout pageTitle="">
    {/* <p>这网站是按照gatsbyjs 5教程制作的</p> */}
    {/* <StaticImage 
      alt="sourdough"
      src="https://source.unsplash.com/random?sourdough"
    />
     <StaticImage 
      alt="fruit"
      src="../images/photo-1592187270271-9a4b84faa228.jpg"
    /> */}
    <Brdclc/>
   </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="主页"/>
