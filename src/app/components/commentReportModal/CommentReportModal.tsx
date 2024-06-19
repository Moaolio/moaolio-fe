'use client'
import React from 'react'
import styles from '@/app/components/commentReportModal/CommentReportModal.module.scss'

interface reportModalProps {
  onReport: () => void
}

const CommentReportModal: React.FC<reportModalProps> = ({ onReport }) => {
  return (
    <div className={styles.reportBox}>
      <div className={styles.reportTitle}>
        <p className={styles.reportRecomfirm}>이 댓글을 신고하시겠습니까?</p>
        <p className={styles.reportButton}>
          신속한 제재를 위해 정확한 사유를 입력해주시기 바랍니다.
        </p>
      </div>
      <div className={styles.reportContent}></div>
      <button
        className={styles.reportButton}
        onClick={onReport}>
        신고하기
      </button>
    </div>
  )
}

export default CommentReportModal
