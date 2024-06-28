'use client'
import React from 'react'
import styles from '@/app/components/commentReportModal/CommentReportModal.module.scss'
import { useOnClickOutside } from '@modern-kit/react'
interface reportModalProps {
  onClose: () => void
}

const CommentReportModal: React.FC<reportModalProps> = ({ onClose }) => {
  const { ref } = useOnClickOutside<HTMLDivElement>(() => {
    onClose()
  })

  return (
    <div
      className={styles.reportBox}
      ref={ref}>
      <div className={styles.reportTitle}>
        <p className={styles.reportRecomfirm}>이 댓글을 신고하시겠습니까?</p>
        <p className={styles.reportText}>
          신속한 제재를 위해 정확한 사유를 입력해주시기 바랍니다.
        </p>
      </div>
      <div className={styles.reportContentBox}>
        <textarea className={styles.reportContent} />
      </div>
      <div className={styles.reportButtonBox}>
        <button
          className={styles.reportButton}
          onClick={onClose}>
          신고하기
        </button>
      </div>
    </div>
  )
}

export default CommentReportModal
