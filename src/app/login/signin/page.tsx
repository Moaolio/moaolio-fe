'use client'
import React, { useState } from 'react'
import GoogleIcon from '../../../assets/icons/GoogleIcon'
import Stroke from '../../../assets/icons/Stroke'
import styles from '@/app/login/signin/page.module.scss'
import LoginBackgroundImage from '@/app/components/loginPages/LoginBackgroundImage'
import Link from 'next/link'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import axios, { AxiosResponse } from 'axios'

interface FormTypes {
  email: string
  name: string
  birth: string
  id: string
  password: string
}

const Page = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const [saveId, setSaveId] = useState(false)
  const methods = useForm<FormTypes>({
    mode: 'onBlur', // 사용자가 필드에서 포커스를 잃을 때 검증이 수행됩니다.
    criteriaMode: 'all' // 모든 검증 오류를 배열 형태로 반환합니다.
  })
  const onSubmit: SubmitHandler<FormTypes> = ({ id, password }) => {
    const userData = {
      id: id,
      password: password
    }

    axios
      .post(`${apiUrl}/user/login`, userData, {
        headers: { 'Content-Type': `application/json` }
      })
      .then(loginSuccess)
      .catch(loginError)
  }

  const loginSuccess = (response: AxiosResponse) => {
    const access_token = response.headers.authorization
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
  }

  const loginError = (error: string) => {
    console.error('로그인 에러:', error)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={styles.parentContainer}>
        <LoginBackgroundImage />
        <div className={styles.mainContainer}>
          <div className={styles.loginTitleBox}>
            <div className={styles.loginTitle}>Sign in</div>
            <div className={styles.welcomeText}>
              안녕하세요! 모아올리오에 오신것을 환영합니다.
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.googleSignInButton}>
              <GoogleIcon />
              Sign in with Google
            </div>
            <Stroke />
            <div className={styles.loginInputId}>
              <input
                className={styles.idInput}
                placeholder="아이디를 입력해주세요."
              />
            </div>
            <div className={styles.loginInputPassword}>
              <input
                className={styles.passwordInput}
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
            <div className={styles.checkContainer}>
              <input
                className={styles.checkBox}
                type="checkbox"
              />
              <label className={styles.checkLabel}>
                다음에도 이 아이디를 기억합니다.
              </label>
              <Link
                href="/login/findid1"
                className={styles.forgotPassword}>
                아이디/비밀번호를 잊으셨나요?
              </Link>
            </div>
            <button
              className={styles.signIn}
              type="submit">
              Sign in!
            </button>
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
      </form>
    </FormProvider>
  )
}

export default Page
