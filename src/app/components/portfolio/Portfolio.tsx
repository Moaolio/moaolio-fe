'use cient'
import styles from '@/app/components/portfolio/Portfolio.module.scss'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <div className={styles.portfolioBox}>
        <div className={styles.title}>
          <span className={styles.positionsSpan}>백엔드</span>
          <span className={styles.portfolioTitle}>웹 개발자 포트폴리오</span>
          <span className={styles.userName}>이름</span>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
