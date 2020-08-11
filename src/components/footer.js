import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from '../components/header.module.scss'
import footerStyles from './footer.module.scss'
const Footer = () => 
{
    const data = useStaticQuery(
        graphql`
        query {
          site{
            siteMetadata
          {author
            email
          }
        }
        }
        `
      )


return (
    <footer className={footerStyles.footer}>
<p>
© 2020  {data.site.siteMetadata.author}.  Thrilled to hear from you at {data.site.siteMetadata.email}.  
</p>
    </footer>
)

}

export default Footer