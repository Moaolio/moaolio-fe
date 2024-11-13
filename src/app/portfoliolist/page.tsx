'use client'
import React from 'react'
import styles from '@/app/portfoliolist/page.module.scss'
import Portfolio from '../components/portfolio/Portfolio'
import Header from '@/components/Header/Header'
const Page = () => {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.spanBox}>
          <span className={styles.titleSpan}>인기 포트폴리오</span>
          <span className={styles.explainSpan}>
            유저들에게 많은 인기를 끌고있는 포트폴리오
          </span>
        </div>
        <div className={styles.buttonBox}>
          <div className={styles.filterBox}>
            <button className={styles.latestButton}>최신순</button>
            <button className={styles.popularButton}>인기순</button>
          </div>
          <button className={styles.writeButton}>작성하기</button>
        </div>
        <div className={styles.portfolioList}>
          <Portfolio />
        </div>
      </div>
    </>
  )
}

export default Page
