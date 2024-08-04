'use client'
import React from 'react'
import styles from '@/app/login/signup1/page.module.scss'
import LoginBackgroundImage from '@/app/components/loginPages/LoginBackgroundImage'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSignUpStore } from '@/store/useSignUpStore'
import IdInput from '@/app/components/loginPages/IdInput'
import { FormProvider, useForm } from 'react-hook-form'

interface FormTypes {
  id: string
  password: string
  confirmPassword: string
}

const Page = () => {
  const methods = useForm<FormTypes>({
    mode: 'onBlur', // 사용자가 필드에서 포커스를 잃을 때 검증이 수행됩니다.
    criteriaMode: 'all' // 모든 검증 오류를 배열 형태로 반환합니다.
  })
  const router = useRouter()
  //스토어 상태 불러오기
  const { setUserSignUp } = useSignUpStore()

  //데이터 취합 해야함
  const onSubmit = (data: FormTypes) => {
    if (data.password !== data.confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
      return
    }
    setUserSignUp({
      id: data.id,
      password: data.password
    })
    router.push('/login/signup2')
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
              <label className={styles.textLabel}>아이디</label>
            </div>

            <div className={styles.loginInputId}>
              <IdInput
                name="id"
                type="text"
                placeholder="아이디를 입력해주세요."
                validation={{ required: '아이디를 입력해주세요.' }}
              />
              <label className={styles.checkId}>중복확인</label>
            </div>

            <div className={styles.idTextBox}>
              <label className={styles.textLabel}>비밀번호</label>
            </div>
            <div className={styles.loginInputPassword}>
              <IdInput
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                validation={{ required: '비밀번호를 입력해주세요.' }}
              />
            </div>
            <div className={styles.idTextBox}>
              <label className={styles.textLabel}>비밀번호 확인</label>
            </div>
            <div className={styles.checkPassword}>
              <IdInput
                name="confirmPassword"
                type="password"
                placeholder="비밀번호를 확인해주세요."
                validation={{ required: '비밀번호 확인을 입력해주세요.' }}
              />
            </div>

            <button
              type="submit"
              className={styles.next}>
              다음(1/3)
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
