import React from 'react'
import { graphql } from 'gatsby'
import LayoutBlog from '../components/layoutBlog'
import Head from '../components/head'
import Blog from './blog.module.scss'


export const query = graphql`
query ($slug: String!){
      markdownRemark (fields: {slug: {eq: $slug}}) 
            {
                frontmatter {
                        title
                        date
                        synopsis
                }
                html
            }
            
}
`


const BlogPost = (props) => {
    return (
        <LayoutBlog>  
            <Head title= {props.data.markdownRemark.frontmatter.title}/>     
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <h4>{props.data.markdownRemark.frontmatter.synopsis}</h4>
            <p className={Blog.horizontalrule}>{props.data.markdownRemark.frontmatter.date}</p>
       
            <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}} className={Blog}>

            </div>
        </LayoutBlog>
    )


}

export default BlogPost