import React from 'react'
import { Link } from 'gatsby'
//import './header.scss'
import headerStyles from './header.module.scss'

const Header = () => {
    return (

<header className={headerStyles.header}>
    <nav>
        <ul className={headerStyles.navList}>
        <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
            </li>
            <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
            </li>
            <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}to="/writing">Writing</Link>
            </li>
            <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/inspiration">Inspiration</Link>
            </li>
        </ul>
    </nav>
</header>

    )
}

export default Header