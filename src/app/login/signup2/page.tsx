'use client'
import React, { useState } from 'react'
import LoginBackgroundImage from '@/app/components/loginPages/LoginBackgroundImage'
import Link from 'next/link'
import styles from '@/app/login/signup2/page.module.scss'
import IdInput from '@/app/components/loginPages/IdInput'
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useSignUpStore } from '@/store/useSignUpStore'
import axios from 'axios'
interface FormTypes {
  name: string
  birth: string
}

const Page = () => {
  const [email, setEmail] = useState('')
  const [emailSend, setEmailSend] = useState('')

  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const methods = useForm<FormTypes>({
    mode: 'onBlur', // 사용자가 필드에서 포커스를 잃을 때 검증이 수행됩니다.
    criteriaMode: 'all' // 모든 검증 오류를 배열 형태로 반환합니다.
  })
  const router = useRouter()
  const { userSignUp, setUserSignUp } = useSignUpStore()

  /**
   * 이메일 전송 함수
   */
  const onClickSendEmail = async () => {
    if (!email) {
      alert('이메일을 입력해주세요.')
      return
    }

    try {
      await axios.post(
        `${apiUrl}/api/auth/register`,
        { email },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      alert('인증번호가 이메일로 전송되었습니다.')
    } catch (error) {
      console.error(error)
      alert('인증번호 전송 중 오류가 발생했습니다.')
    }
  }

  const onSubmit = async (data: FormTypes) => {
    if (data.name === '') {
      alert('이름을 입력해주세요.')
      return
    } else if (data.birth === '') {
      alert('생년월일을 입력해주세요.')
      return
    }

    const combinedData = {
      ...userSignUp, // 첫 번째 페이지 데이터
      email,
      name: data.name,
      birth: data.birth
    }
    console.log('데이터:', combinedData)

    try {
      await axios.post(`${apiUrl}/api/user/signup`, combinedData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log('회원가입 성공')
      //초기화
      setUserSignUp({
        name: '',
        birth: '',
        uid: '',
        password: ''
      })
      router.push('/login/signin')
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error)
      alert('회원가입 중 오류가 발생했습니다.')
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
              <IdInput
                name="email"
                type="text"
                placeholder="이메일을 입력해주세요."
                validation={{ required: '이메일을 입력해주세요.' }}
                onChange={e => setEmail(e.target.value)}
              />
              <label
                className={styles.sendEmail}
                onClick={onClickSendEmail}>
                인증번호 전송
              </label>
            </div>
            <div className={styles.idTextBox}>
              <label className={styles.textLabel}>이메일 인증번호 입력</label>
            </div>
            <div className={styles.loginInputPassword}>
              <IdInput
                name="emailCode"
                type="text"
                placeholder="인증번호 6자리를 입력해주세요."
                validation={{ required: '인증번호 6자리를 입력해주세요.' }}
              />
              <label className={styles.checkNumber}>확인</label>
            </div>
            <div className={styles.idTextBox}>
              <label className={styles.textLabel1}>이름</label>
              <label className={styles.textLabel2}>생년월일</label>
            </div>
            <div className={styles.nameNicknameBox}>
              <div className={styles.nameInputDiv}>
                <IdInput
                  name="name"
                  type="text"
                  placeholder="이름을입력해주세요."
                  validation={{ required: '이름을입력해주세요.' }}
                />
              </div>
              <div className={styles.nickNameInputDiv}>
                <IdInput
                  name="birth"
                  type="text"
                  placeholder="6자리 생년월일 입력."
                  validation={{ required: '6자리 생년월일을 입력해주세요.' }}
                />
              </div>
            </div>

            <button
              type="submit"
              className={styles.next}>
              가입을 환영합니다!
            </button>
            <div className={styles.signInBox}>
              <label className={styles.signInText}>
                이미 계정이 있으신가요?
              </label>
              <Link
                href="/login/signin"
                className={styles.signIn}>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default Page
