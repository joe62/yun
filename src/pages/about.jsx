import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const About = () => {
  return (
   <Layout pageTitle="About Page">
    <p>大家好，这是我的网站，它是用gatsbyjs 5创建的</p>
   </Layout>
  )
}

export default About

export const Head = () => <Seo title="自我介绍"/>
