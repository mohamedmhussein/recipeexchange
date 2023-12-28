import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>Welcome to Recipe Exchange</h1>
        <p>Discover and share delicious recipes with the community</p>
        <button className={styles.button}>Browse featured recipes</button>
      </div>
      <div className={styles.featured}>
        <h1>Featured Recipes</h1>
      </div>
    </div>
  )
}
