import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Logos from '../components/logos'
import headerStyles from '../components/header.module.scss'
import Head from '../components/head'
import CTA from '../components/CTA.module.scss'
import { FaBehance, FaInstagram, FaLinkedinIn } from 'react-icons/fa'





const IndexPage = () => {
  

  const data = useStaticQuery(
    graphql`
    query {
      site{
        siteMetadata
      {title
      }
    }
    }
    `
  )

  return (
    <Layout>
      <Head title ="Home"/>

      <a href="https://www.behance.net/shreyas" target="_blank" className={CTA.social}><FaBehance/></a>
      <a href="https://www.linkedin.com/in/shreyas51283/" target="_blank" className={CTA.social}><FaLinkedinIn/></a>
      <a href="https://www.instagram.com/shreyas_nanaman/NPM" target="_blank" className={CTA.social}><FaInstagram /></a>
      <h1><Link className={headerStyles.title} to='/'>
      </Link></h1>

      
      <h2>
        Hi there, I'm  {data.site.siteMetadata.title}.
      </h2>
      <p>
        Currently designing the future of data management products.
        I started my career in animation, drew comic books, worked in advertising and now do experience design. I like to keep learning and building things. Constraints make things interesting. Simple is elegant. I prefer working towards an outcome and not output.
        The awesome people and places, I’ve worked for.
      </p>
     

      <div>
        <Logos/>
      </div>
      <a href="https://www.behance.net/shreyas" target="_blank" className={CTA.CTAbutton}>View Portfolio on Behance</a>
      
    </Layout>
  )
}

export default IndexPage
