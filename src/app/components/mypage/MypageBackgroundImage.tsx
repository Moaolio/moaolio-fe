import React from 'react'
import styles from '@/app/components/loginPages/LoginBackgroundImage.module.scss'
import MyPageArrow from '@/assets/icons/MypageArrow'

const MypageBackgoundImage = () => {
  return (
    <div className={styles.parentContainer}>
      <MyPageArrow />
    </div>
  )
}

export default MypageBackgoundImage
