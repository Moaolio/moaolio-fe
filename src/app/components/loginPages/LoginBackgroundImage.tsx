import React from 'react'
import styles from '@/app/components/loginPages/LoginBackgroundImage.module.scss'
import LoginPageArrow from '@/assets/icons/LoginPageArrow'

const LoginBackgroundImage = () => {
  return (
    <div className={styles.parentContainer}>
      <LoginPageArrow />
      <div className={styles.backgroundContainer}></div>
    </div>
  )
}

export default LoginBackgroundImage
