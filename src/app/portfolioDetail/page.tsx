'use client'
import React from 'react'
import styles from '@/app/portfolioDetail/page.module.scss'
import PortfolioComment from '@/app/components/portfolioComment/PortfolioComment'

const Page = () => {
  return (
    <div className={styles.portfolioDetailContainer}>
      <div className={styles.portfolioDetailImage}></div>
      <div className={styles.portfolioCommentBox}>
        <div className={styles.userName}></div>
        <div className={styles.portfolioDetail}></div>
        <div className={styles.portfolioLike}></div>
        <div className={styles.techStack}></div>
        <div className={styles.commentContainer}>
          <PortfolioComment />
          <div className={styles.writeCommentBox}>
            <div className={styles.writeComment}></div>
            <div className={styles.postButton}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
