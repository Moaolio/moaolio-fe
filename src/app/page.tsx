import Header from '../components/Header/Header'
import styles from './Home.module.scss'
import Slider from '../components/Slider/Slider'
import { MainSlides } from '../constants/SliderContents'
import SearchBar from '@/components/SearchBar/SearchBar'
import PortfolioBox from './_components/PortfolioBox'
import BoardBox from './_components/BoardBox'

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
      <section className={styles.secondSection}>
        <PortfolioBox type="hot" />
        <PortfolioBox type="recent" />
        <BoardBox />
      </section>
    </div>
  )
}
