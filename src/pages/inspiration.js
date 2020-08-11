import React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import writingStyles from './writing.module.scss'
import Head from '../components/head'





const Inspiration = () => {

    return (
        <Layout>
             <Head title ="Inspiration"/>  
            <h2>
                Inspiration
    </h2>
            <p>Some people whose work I follow to recharge my creative batteries. In no particular order.
</p>
            <ol className={writingStyles.posts}>



                <li className={writingStyles.post}>
                    <a href="https://m.signalvnoise.com/" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Signal V. Noise
                        </h3>
                        <p>Strong opinions and shared thoughts on design, business, and tech. By the makers (and friends) of Basecamp. Since 1999.

                        </p>
                    </a>
                </li>
                <li className={writingStyles.post}>
                    <a href="http://www.ajitrao.com/" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Ajit Rao
                        </h3>
                        <p>Multi faceted artist, designer and architect and IMHO the father of Indian Animation. Period.</p>
                    </a>
                </li>
                <li className={writingStyles.post}>
                    <a href="https://www.behance.net/MagicSproutsStudio" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Magic Sprouts
                        </h3>
                        <p>Illustration studio based out of Mumbai.</p>
                    </a>
                </li>
                <li className={writingStyles.post}>
                    <a href="https://vimeo.com/afternoonfilms" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Afternoon Films
                        </h3>
                        <p>Animation boutique that starts their day in the afternoon. Hence their name.</p>
                    </a>
                </li>
                <li className={writingStyles.post}>
                    <a href="https://vetya.blogspot.com/" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Nitin Veturkar
                        </h3>
                        <p>Illustrator extraordinaire based out of Pune. Started life as an engineer.</p>
                    </a>
                </li>
                <li className={writingStyles.post}>
                    <a href="https://www.abhijitsingh.com/" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Abhijit Singh
                        </h3>
                        <p>Self taught experience designer. Check out his awesome website, which he built by himself!</p>
                    </a>
                </li>
                <li className={writingStyles.post}>
                    <a href="https://www.nashvail.me/" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Nishant Verma
                        </h3>
                        <p> Another self taught talented designer, and illustrator. I just love his writing.</p>
                    </a>
                </li>
                <li className={writingStyles.post}>
                    <a href="https://mplusp.in/" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Meghna Kulkrani
                        </h3>
                        <p> Architect, bicyling, photography and DIY enthusiast based out of Pune. Also draws comics. </p>
                    </a>
                </li>
                <li className={writingStyles.post}>
                    <a href="https://www.linkedin.com/in/bmerton/?originalSubdomain=in" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Ben Merton
                        </h3>
                        <p> Enterpreneur changing the way the manufacturing industry communicates. The wit behind the outcome
        versus output quote. </p>
                    </a>
                </li>

                <li className={writingStyles.post}>
                    <a href="https://www.antonsten.com/" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Anton Sten
                        </h3>
                        <p>  Solopreneur with some intersting viewpoints.</p>
                    </a>
                </li>
                <li className={writingStyles.post}>
                    <a href="http://www.sankalpsinha.com/" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Sankalp Sinha
                        </h3>
                        <p> Minimalist lifetsyle, non workaholic, self taught designer. A rare Indian designer who understands the concept of work life balance.</p>
                    </a>
                </li>
                <li className={writingStyles.post}>
                    <a href="https://www.startuptolast.com/" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Startup to last
                        </h3>
                        <p>A podacst on building profitable sustainable business, run by Tyler King and Rick Lindquist.</p>
                    </a>
                </li>

                <li className={writingStyles.post}>
                    <a href="https://pjrvs.com/" target="_blank" style={{ textDecoration: "none" }}><h3>
                        Paul Jarvis
                        </h3>
                        <p>Author of the sustainable business lifestyle book <strong>Company of One</strong>, and one of the pioneers of building a small
                            profitable business.</p>
                    </a>
                </li>


            </ol>

        </Layout>

    )
}

export default Inspiration