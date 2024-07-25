'use client'
import React from 'react'
import styles from '@/app/login/findpassword3/page.module.scss'
import LoginBackgroundImage from '@/app/components/loginPages/LoginBackgroundImage'
import Link from 'next/link'

const Page = () => {
  return (
    <div className={styles.parentContainer}>
      <LoginBackgroundImage />
      <div className={styles.mainContainer}>
        <div className={styles.loginTitleBox}>
          <div className={styles.loginTitle}>Find Password</div>
          <div className={styles.welcomeText}>
            입력하신 정보와 일치하는 회원님의 비밀번호를 찾았습니다. 이제
            로그인해볼까요?
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.findContainer}>
            <div className={styles.findId}>아이디 찾기</div>
            <div className={styles.findPassword}>비밀번호 찾기</div>
          </div>
          <div className={styles.userIdText}>
            회원님의 비밀번호는
            {/* `{userPassword}` */}
            입니다.
          </div>
          <div className={styles.checkContainer}>
            <label className={styles.forgotPassword}>
              비밀번호를 변경하고싶나요?
            </label>
          </div>
          <Link
            href="/login/signin"
            className={styles.signIn}>
            로그인 화면으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
