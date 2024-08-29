'use client'
import React, { useEffect, useState } from 'react'
import GoogleIcon from '../../../assets/icons/GoogleIcon'
import Stroke from '../../../assets/icons/Stroke'
import styles from '@/app/login/signin/page.module.scss'
import LoginBackgroundImage from '@/app/components/loginPages/LoginBackgroundImage'
import Link from 'next/link'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'

interface FormTypes {
  email: string
  name: string
  birth: string
  username: string
  password: string
}

interface LoginResponse {
  access_token: string
}

const Page = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const [saveId, setSaveId] = useState(false)
  const methods = useForm<FormTypes>({
    mode: 'onBlur',
    criteriaMode: 'all'
  })
  const router = useRouter()

  // 쿠키 설정
  const setCookie = (username: string, value: string, days: number) => {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000
    ).toUTCString()
    document.cookie = `${username}=${encodeURIComponent(value)}; expires=${expires};`
  }

  // 쿠키 가져오기
  const getCookie = (username: string) => {
    return document.cookie.split(';').reduce((result, cookie) => {
      const [key, value] = cookie.split('=')
      return key.trim() === username ? decodeURIComponent(value) : result
    }, '')
  }

  // 쿠키 삭제
  const deleteCookie = (username: string) => {
    document.cookie = `${username}=; expires=Thu, 01 Jan 1970 00:00:01 UTC;`
  }

  // 페이지 로드 시 쿠키에서 id 불러오기
  useEffect(() => {
    const savedId = getCookie('username')
    if (savedId) {
      methods.setValue('username', savedId)
      setSaveId(true)
    }
    // 로컬스토리지에서 토큰을 가져와 헤더 설정
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    }
  }, [methods])

  const onSubmit: SubmitHandler<FormTypes> = ({ username, password }) => {
    if (saveId) {
      setCookie('username', username, 1)
    } else {
      deleteCookie('username')
    }

    const userData = {
      username: username,
      password: password
    }

    axios
      .post(`${apiUrl}/api/user/login`, userData, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(loginSuccess)
      .catch(loginError)
  }

  const loginError = (error: AxiosError<LoginResponse>) => {
    if (error.response) {
      console.log('로그인 실패 데이터', error.response.data)
      const accessToken = error.response.data?.access_token
      if (accessToken) {
        console.log('실패 시 응답에서 받은 토큰:', accessToken)
      }
    } else {
      console.error('로그인 요청 실패:', error.message)
    }
  }

  const loginSuccess = (response: AxiosResponse<LoginResponse>) => {
    const accessToken = response.data.access_token
    console.log(accessToken)
    localStorage.setItem('accessToken', accessToken)
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    router.push('/')
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
                {...methods.register('username')}
              />
            </div>
            <div className={styles.loginInputPassword}>
              <input
                className={styles.passwordInput}
                type="password"
                placeholder="비밀번호를 입력해주세요."
                {...methods.register('password')}
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
