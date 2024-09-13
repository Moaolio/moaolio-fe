'use client'
import React from 'react'
import styles from '@/app/mypage/_components/myProfileInfo.tsx/MyProfileInfo.module.scss'
import Header from '@/components/Header/Header'

const MyProfileInfo = () => {
  return (
    <>
      <div className={styles.profileInfoContainer}>
        <div className={styles.profileUser}>
          <span className={styles.positions}>프론트엔드</span>
          <span className={styles.uid}>민수</span>
          <span className={styles.introduction}>
            안녕하세요~ 프엔 취준생 김민수입니다~
          </span>
        </div>
        <div className={styles.userInfoBox}>
          <div className={styles.userStackBox}>
            <span className={styles.myStackTitle}>나의 스택목록</span>
            <span className={styles.myStack}></span>
          </div>
          <div className={styles.ExperienceBox}>
            <span className={styles.experienceTitle}>경력</span>
            <span className={styles.experience}>3년차</span>
            <div className={styles.contactBox}>
              <span className={styles.contactAddressTitle}>컨택 가능 주소</span>
              <span className={styles.contactAddress}>010-0000-0000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProfileInfo
