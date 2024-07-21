import Header from './layout/Header/Header'
import styles from './Home.module.scss'
import Slider from '../components/Slider/Slider'
import { MainSlides } from '../constants/SliderContents'

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <section className={styles.firstSection}>
        <Header />
        <div className={styles.introduceWrapper}>
          <Slider slides={MainSlides} />
        </div>
      </section>
    </div>
  )
}
