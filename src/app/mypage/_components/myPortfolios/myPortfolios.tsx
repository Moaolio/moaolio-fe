'use client'
import React from 'react'
import styles from '@/app/mypage/_components/myPortfolios/myPortfolios.module.scss'
import Portfolio from '@/app/components/portfolio/Portfolio'

const MyPortfolios = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  return (
    <>
      <div className={styles.profileInfoContainer}>
        <Portfolio />
      </div>
    </>
  )
}
export default MyPortfolios
