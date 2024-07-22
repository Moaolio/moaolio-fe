'use client'
import React from 'react'
import LoginBackgroundImage from '@/app/components/loginPages/LoginBackgroundImage'
import Link from 'next/link'
import styles from '@/app/login/signup2/page.module.scss'

const Page = () => {
  return (
    <div className={styles.parentContainer}>
      <LoginBackgroundImage />
      <div className={styles.mainContainer}>
        <div className={styles.loginTitleBox}>
          <div className={styles.loginTitle}>Sign up</div>
          <div className={styles.welcomeText}>
            계정 생성을 위한 간단한 정보를 입력해주세요!
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.idTextBox}>
            <label className={styles.textLabel}>이메일</label>
          </div>
          <div className={styles.loginInputId}>
            <input
              className={styles.idInput}
              placeholder="이메일을 입력해주세요."
            />
            <label className={styles.sendEmail}>인증번호 전송</label>
          </div>
          <div className={styles.idTextBox}>
            <label className={styles.textLabel}>이메일 인증번호 입력</label>
          </div>
          <div className={styles.loginInputPassword}>
            <input
              className={styles.passwordInput}
              placeholder="인증번호 6자리를 입력해주세요."
            />
            <label className={styles.checkNumber}>확인</label>
          </div>
          <div className={styles.idTextBox}>
            <label className={styles.textLabel1}>이름</label>
            <label className={styles.textLabel2}>닉네임</label>
          </div>
          <div className={styles.nameNicknameBox}>
            <div className={styles.nameInputDiv}>
              <input
                className={styles.nameInput}
                placeholder="이름을입력해주세요."
              />
            </div>
            <div className={styles.nickNameInputDiv}>
              <input
                className={styles.nickNameInput}
                placeholder="닉네임을 입력해주세요."
              />
            </div>
          </div>

          <Link
            href="/login/signup3"
            className={styles.next}>
            다음(2/3)
          </Link>
          <div className={styles.signInBox}>
            <label className={styles.signInText}>이미 계정이 있으신가요?</label>
            <Link
              href="/login/signin"
              className={styles.signIn}>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
