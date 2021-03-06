import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import blockquote from './blockquote.module.scss'



const About = () => {
    return (
        <Layout>
          <Head title ="About"/>   
        <div>
            <h2>
                I have a bachelor's degree in Microbiology.
        </h2>
            <p>
                I actually do.
                Which was followed by a Master’s in Anthropology. A self taught designer who was reading comic books before nerd culture was cool, and was working in startups when startups were considered career dead ends. I’ve since worked in most of the creative industry, from animation studios to big name corporates.
                I am not a big fan of labels. I just make sure I have the skills required to get the job done, and done well. I am an avid fan of horror films and Doctor Who. As a TYPE B personality, I am heavily influenced by the philosophies of Bill Watterson and Jason Fried. I yearn for a simple life well lived, that lets me be available for the people I care about.
            </p>

            <div className={blockquote.blockquote}> 
                <strong>Bonus Fact</strong>
                <p>I started one of Bangalore's first <a href="https://www.instagram.com/lifedrawingbangalore/?hl=en" target="_blank" style={{textDecoration:"none"}}>life drawing groups. </a>
                It’s now been taken to the next level by Prathiksha Bhat, Felix Jackson and Rahul Phillip.
                </p>
            </div>

        </div>
        </Layout>
    )
}

export default About
