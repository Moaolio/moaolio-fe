'use client'
import React from 'react'
import Stroke from '../../../assets/icons/Stroke'
import styles from '@/app/login/findpassword1/page.module.scss'
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
            이용하던 비밀번호를 잊으셨나요? 아이디와 이메일을 입력해주세요.
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
          <Stroke />
          <div className={styles.loginInputId}>
            <input
              className={styles.idInput}
              placeholder="아이디를 입력해주세요"
            />
          </div>
          <div className={styles.loginInputPassword}>
            <input
              className={styles.passwordInput}
              placeholder="E-mail을 입력해주세요"
            />
          </div>
          <div className={styles.checkContainer}>
            <label className={styles.forgotPassword}>
              E-mail을 잊어버리셨나요?
            </label>
          </div>
          <Link
            href="/login/findpassword2"
            className={styles.signIn}>
            인증번호 발송
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
