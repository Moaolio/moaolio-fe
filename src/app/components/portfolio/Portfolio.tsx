'use cient'
import styles from '@/app/components/portfolio/Portfolio.module.scss'
import React from 'react'
interface PortfolioTypes {
  position: string
  title: string
  name: string
}

const Portfolio = ({ position, title, name }: PortfolioTypes) => {
  return (
    <div>
      <div className={styles.portfolioBox}>
        <div className={styles.title}>
          <span className={styles.positionsSpan}>{position}</span>
          <span className={styles.portfolioTitle}>{title}</span>
          <span className={styles.userName}>{name}</span>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
