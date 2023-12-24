import Link from 'next/link'
import React from 'react'
import styles from '../style/Header.module.css'


const Header = () => {
  return (
    <nav className={styles.navbar}>
        <Link href="/" className= {styles.logo}>Recipe Exchange</Link>
        <div className={styles.links}>
            <div>Home</div>
            <div>Recipes</div>
            <div>Categories</div>
            {/* {More navigation items} */}
        </div>

    </nav>
  )
}

export default Header

