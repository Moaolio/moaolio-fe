import Link from 'next/link'
import styles from './PortfolioBox.module.scss'
import Carousel from '@/components/Carousel/Carousel'
import MoreIcon from '@/assets/MoreIcon'

interface PortfolioBoxProps {
  type: 'hot' | 'recent'
}

const filters = ['Design', 'Frontend', 'Backend']

const portfolioTestImages = [
  {
    name: 'image1',
    link: '/images/portfolio-test-image1.png'
  },
  {
    name: 'image2',
    link: '/images/portfolio-test-image2.png'
  },
  {
    name: 'image3',
    link: '/images/portfolio-test-image3.png'
  },
  {
    name: 'image4',
    link: '/images/portfolio-test-image4.png'
  },
  {
    name: 'image5',
    link: '/images/portfolio-test-image4.png'
  }
]

const PortfolioBox = ({ type }: PortfolioBoxProps) => {
  return (
    <div className={styles.portfolioBoxWrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.titleText}>
          {type === 'hot'
            ? '현재 제일 HOT한 인기 포트폴리오'
            : '최근에 업로드 된 포트폴리오'}
        </div>
        <Link
          href={type === 'hot' ? '/' : '/'}
          className={styles.more}>
          더보기
        </Link>
      </div>
      <div className={styles.filterContainer}>
        {filters.map((filter, index) => (
          <div
            key={index}
            className={styles.filterText}>
            {filter}
          </div>
        ))}
        <MoreIcon />
      </div>
      <Carousel images={portfolioTestImages} />
    </div>
  )
}

export default PortfolioBox
