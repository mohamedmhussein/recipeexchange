import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'


const Header = () => {

  const items = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Recipes",
      link: "/recipes"
    },
    {
      title: "Profile",
      link: "/profile"
    },
    {
      title: "Categories",
      link: "/categories"
    }
  ]

  return (
    <nav className={styles.container}>
        <Link href="/" className= {styles.logo}>Recipe Exchange</Link>
        <div className={styles.links}>
          {items.map(item => 
          (<Link className = {styles.link}href={item.link} key = {item.title} >{item.title}</Link>)
          )}

            {/* {More navigation items} */}
        </div>

    </nav>
  )
}

export default Header

