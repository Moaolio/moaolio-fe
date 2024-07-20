import Image from 'next/image'
import Header from './layout/Header/Header'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <section className={styles.firstSection}>
        <Header />
        <div className={styles.introduceWrapper}>
          <div className={styles.textWrapper}>
            <div>
              깔끔하고 감각적인 <br />{' '}
              <span className={styles.highlight}>앱 UX/UI 포트폴리오</span>
            </div>
            <div>모아올리오에 한번에 모아 올렸습니다.</div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/home-image.png"
              alt="Home Image"
              width={822.48}
              height={420.11}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
