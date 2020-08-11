import React from 'react'
import { Link } from 'gatsby'
import Footer from './footer'
import Header from './header'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (

        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
            <Header />
            {props.children}
            </div>
           
            <Footer />
        </div>




    )


}

export default Layout