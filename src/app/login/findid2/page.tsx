'use client'
import React from 'react'
import Stroke from '../../../assets/icons/Stroke'
import styles from '@/app/login/findid2/page.module.scss'
import LoginBackgroundImage from '@/app/components/loginPages/LoginBackgroundImage'
import Link from 'next/link'

const Page = () => {
  return (
    <div className={styles.parentContainer}>
      <LoginBackgroundImage />
      <div className={styles.mainContainer}>
        <div className={styles.loginTitleBox}>
          <div className={styles.loginTitle}>Find ID</div>
          <div className={styles.welcomeText}>
            이메일로 인증번호 6자리를 발송하였습니다. 인증번호를 입력해주세요.{' '}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.findContainer}>
            <div className={styles.findId}>아이디 찾기</div>
            <div className={styles.findPassword}>비밀번호 찾기</div>
          </div>
          <Stroke />
          <div className={styles.userIdText}>
            회원님의 아이디는
            {/* `{user}` */}
            입니다.
          </div>
          <div className={styles.checkContainer}>
            <label className={styles.forgotPassword}>
              아이디 정보가 일치하지 않나요?
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
