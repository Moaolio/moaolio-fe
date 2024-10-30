'use client'
import React from 'react'
import styles from '@/app/mypage/_components/myPortfolios/myPortfolios.module.scss'

const MyPortfolios = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  return (
    <>
      <div className={styles.profileInfoContainer}></div>
    </>
  )
}
export default MyPortfolios
