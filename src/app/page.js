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

      <h1 className={styles.featuredTitle}>Featured Recipes</h1>

      <div className={styles.featuredContainer}>
        <div className={styles.item}>
          <h2>Classic Spaghetti Bolognese</h2>
          <p>Classic Spaghetti Bolognese is a hearty Italian favorite, featuring ground beef, aromatic veggies, and a flavorful tomato sauce over al dente spaghetti. A timeless comfort dish, perfect for any occasion.</p>
          <button>See more</button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/Classic Spaghetti Bolognese.jpeg"
            alt='Classic Spaghetti Bolognese'
            fill={true}
          />
        </div>
      </div>
    </div>
  )
}
