import Header from './layout/Header/Header'
import styles from './Home.module.scss'
import Slider from '../components/Slider/Slider'
import { MainSlides } from '../constants/SliderContents'
import SearchBar from '@/components/SearchBar/SearchBar'

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <section className={styles.firstSection}>
        <Header />
        <div className={styles.introduceWrapper}>
          <div className={styles.searchBarWrapper}>
            <SearchBar />
          </div>
          <Slider slides={MainSlides} />
        </div>
      </section>
    </div>
  )
}
