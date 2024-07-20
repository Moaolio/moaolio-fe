import Image from 'next/image'
import Header from './layout/Header/Header'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <section className={styles.firstSection}>
        <Header />
        <div className={styles.introduceWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/home-image.png"
              alt="Home Image"
              width={822}
              height={436}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
