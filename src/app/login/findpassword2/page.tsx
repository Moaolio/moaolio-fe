'use client'
import React from 'react'
import styles from '@/app/login/findpassword2/page.module.scss'
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
            이메일로 인증번호 6자리를 발송하였습니다. 인증번호를 입력해주세요.
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.findContainer}>
            <Link
              href="/login/findid1"
              className={styles.findId}>
              아이디 찾기
            </Link>
            <Link
              href="/login/findpassword1"
              className={styles.findPassword}>
              비밀번호 찾기
            </Link>
          </div>
          <div className={styles.authCodeBox}>
            <label className={styles.authText}>
              E-mail로 발송된 인증번호 6자리를 입력해주세요.
            </label>
            <div className={styles.authCodeBox2}>
              <input className={styles.authCode}></input>
              <input className={styles.authCode}></input>
              <input className={styles.authCode}></input>
              <input className={styles.authCode}></input>
              <input className={styles.authCode}></input>
              <input className={styles.authCode}></input>
            </div>
          </div>
          <Link
            href="/login/findId2"
            className={styles.signIn}>
            비밀번호 찾기
          </Link>
          <div className={styles.signUpBox}>
            <label className={styles.signUpText}>
              등록된 계정이 없으신가요?
            </label>
            <Link
              href="/login/signup1"
              className={styles.signUp}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
