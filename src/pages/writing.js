import React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import writingStyles from './writing.module.scss'
import Head from '../components/head'





const Writing = () => {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark 
            (
                sort: {
                  fields: [frontmatter___date]
                  order: DESC
                }
              )
            
            {
                edges {
                  node {
                    frontmatter {
                      title
                      date
                      synopsis
                    }
                    fields {slug}
                  }
                }
              }        
        }
        `
    )

 

    return (
        <Layout>
             <Head title ="Writing"/>  

            <h2>
                Writing
        </h2>
            <ol className={writingStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (

                        <li className={writingStyles.post}>
                            <Link to ={`/writing/${edge.node.fields.slug}`}>
                            <h3>{edge.node.frontmatter.title}</h3>
                            <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}

            </ol>

        </Layout>
    )
}

export default Writing