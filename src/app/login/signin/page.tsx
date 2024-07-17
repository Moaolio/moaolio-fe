'use client'
import React from 'react'
import styles from '@/app/login/signin/page.module.scss'
const Page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.loginTitleBox}>
          <div className={styles.loginTitle}>Sign in</div>
          <div className={styles.welcomeText}>
            안녕하세요! 모아올리오에 오신것을 환영합니다.
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.googleSignInButton}></div>
          <div className={styles.underline}></div>
          <div className={styles.loginInput}></div>
          <div className={styles.passwordInput}></div>
          <div className={styles.checkContainer}>
            <div className={styles.checkBox}></div>
            <div className={styles.forgotPassword}></div>
          </div>
          <div className={styles.signIn}></div>
          <div className={styles.signUpBox}>
            <div className={styles.signUpText}></div>
            <div className={styles.signUp}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
