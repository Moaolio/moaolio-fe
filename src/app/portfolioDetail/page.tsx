'use client'
import React, { useState } from 'react'
import styles from '@/app/portfolioDetail/page.module.scss'
import CommentReportModal from '@/app/components/commentReportModal/CommentReportModal'
import { MdOutlineReport } from 'react-icons/md'

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleReport = async () => {
    setIsModalOpen(false) // 모달 닫기
  }

  return (
    <div className={styles.portfolioDetailContainer}>
      <div className={styles.portfolioDetailImage}></div>
      <div className={styles.portfolioCommentBox}>
        <div className={styles.userName}></div>
        <div className={styles.portfolioDetail}></div>
        <div className={styles.portfolioLike}></div>
        <div className={styles.techStack}></div>
        <div className={styles.commentContainer}>
          <div className={styles.commentBox}>
            <div className={styles.commentProfileImage}></div>
            <div className={styles.comment}></div>
            <div
              className={styles.commentReport}
              onClick={() => setIsModalOpen(true)}>
              {isModalOpen && <CommentReportModal onReport={handleReport} />}
              <MdOutlineReport />
            </div>
          </div>
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
