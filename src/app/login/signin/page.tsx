'use client'
import React, { useEffect, useState } from 'react'
import GoogleIcon from '../../../assets/icons/GoogleIcon'
import Stroke from '../../../assets/icons/Stroke'
import styles from '@/app/login/signin/page.module.scss'
import LoginBackgroundImage from '@/app/components/loginPages/LoginBackgroundImage'
import Link from 'next/link'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface FormTypes {
  email: string
  name: string
  birth: string
  uid: string
  password: string
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
  const setCookie = (uid: string, value: string, days: number) => {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000
    ).toUTCString()
    document.cookie = `${uid}=${encodeURIComponent(value)}; expires=${expires}; path=/`
  }

  // 쿠키 가져오기
  const getCookie = (uid: string) => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${uid}=`)
    if (parts.length === 2) return parts.pop()?.split(';').shift()
    return ''
  }

  // 쿠키 삭제
  const deleteCookie = (uid: string) => {
    document.cookie = `${uid}=; expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/`
  }

  // 쿠키에서 id 불러오기
  useEffect(() => {
    const savedId = getCookie('uid')
    if (savedId) {
      methods.setValue('uid', savedId)
      setSaveId(true)
    }
  }, [methods])

  //엑세스토큰 요청 함수
  const requestAccessToken = async (refreshToken: string) => {
    try {
      const response = await axios.post(
        `${apiUrl}/reissue`,
        { refresh_token: refreshToken },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const accessToken = response.data.access_token
      localStorage.setItem('accessToken', accessToken)
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
      router.push('/')
    } catch (error) {
      console.error('엑세스 토큰 에러 :', error)
    }
  }

  const onSubmit: SubmitHandler<FormTypes> = async ({ uid, password }) => {
    if (saveId) {
      setCookie('uid', uid, 1)
    } else {
      deleteCookie('uid')
    }

    const userData = {
      uid: uid,
      password: password
    }

    try {
      const response = await axios.post(`${apiUrl}/api/user/login`, userData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })

      const refreshToken = response.data.refresh_token
      setCookie('refreshToken', refreshToken, 7) // 쿠키에 리프레시 토큰 저장
      // 2. 리프레시 토큰으로 엑세스토큰 요청
      await requestAccessToken(refreshToken)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // AxiosError 타입으로 에러 처리
        console.error('로그인 요청 실패:', error.message)
      } else {
        // AxiosError가 아닌 경우의 처리
        console.error('알 수 없는 오류 발생:', error)
      }
    }
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
                {...methods.register('uid')}
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
