'use client'
import React, { useState } from 'react'
import CommentReportModal from '@/app/components/commentReportModal/CommentReportModal'
import { MdOutlineReport } from 'react-icons/md'
import styles from '@/app/components/portfolioComment/PortfolioComment.module.scss'

const PortfolioComment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleReportModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className={styles.commentBox}>
        <div className={styles.commentProfileImage}></div>
        <div className={styles.comment}></div>
        <div
          className={styles.commentReport}
          onClick={handleReportModal}>
          <MdOutlineReport />
        </div>
        {isModalOpen && <CommentReportModal onClose={handleCloseModal} />}
      </div>
    </div>
  )
}

export default PortfolioComment
