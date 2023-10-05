import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Layout = ({pageTitle,children}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
  return (
    <div className=' mx-auto max-w-5xl font-sans'>
        <header className=' text-5xl text-gray-700 my-12 mx-0 '>{data.site.siteMetadata.title}</header>
        <nav>
            <ul className=' flex list-none pl-0'>
                <li className='pr-8'>
                    <Link to="/" className=' text-black'>主页</Link>
                </li >
                <li className='pr-8'><Link to="/about" className=' text-black'>自我介绍</Link></li>
                <li className='pr-8'><Link to="/blog" className=' text-black'>文章</Link></li>
                <li className='pr-8'><Link to="/recipe" className=' text-black'>配方</Link></li>
            </ul>
        </nav>
        <main>
            <center>
            <h3 className='font-bold text-[#663399] text-2xl mb-5'>{pageTitle}</h3>
            </center>
            {children}
        </main>
    </div>
  )
}

export default Layout