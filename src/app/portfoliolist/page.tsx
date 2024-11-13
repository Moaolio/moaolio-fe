'use client'
import React from 'react'
import styles from '@/app/portfoliolist/page.module.scss'
import Portfolio from '../components/portfolio/Portfolio'

const Page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.spanBox}>
          <span className={styles.titleSpan}>인기 포트폴리오</span>
          <span className={styles.explainSpan}>
            유저들에게 많은 인기를 끌고있는 포트폴리오
          </span>
        </div>
        <div className={styles.buttonBox}>
          <div className={styles.filterBox}>
            <button className={styles.latestButton}></button>
            <button className={styles.popularButton}></button>
          </div>
          <button className={styles.writeButton}></button>
        </div>
        <div className={styles.portfolioList}>
          <Portfolio />
        </div>
      </div>
    </>
  )
}

export default Page
