'use client'
import React from 'react'
import LoginBackgroundImage from '@/app/components/loginPages/LoginBackgroundImage'
import Link from 'next/link'
import styles from '@/app/login/signup3/page.module.scss'
import IdInput from '@/app/components/loginPages/IdInput'
import { FormProvider, useForm } from 'react-hook-form'

interface FormTypes {
  name: string
  placeholder?: string
  job: string
  tech: string
  career: string
  birth: string
}

const Page = () => {
  const methods = useForm<FormTypes>()

  return (
    <FormProvider {...methods}>
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
            <div className={styles.infoBox}>
              <label className={styles.textLabel}>직업</label>
            </div>
            <div className={styles.jobInputDiv}>
              <IdInput
                name="job"
                type="text"
                placeholder="직업을 입력해주세요."
                validation={{ required: '직업을 입력해주세요.' }}
              />
            </div>
            <div className={styles.infoBox}>
              <label className={styles.textLabel1}>기술스택</label>
              <label className={styles.textLabel2}>경력</label>
            </div>
            <div className={styles.nameNicknameBox}>
              <div className={styles.techInputDiv}>
                <IdInput
                  name="tech"
                  type="text"
                  placeholder="#해시태그 입력"
                  validation={{ required: '#해시태그 입력' }}
                />
              </div>
              <div className={styles.careerInputDiv}>
                <IdInput
                  name="career"
                  type="text"
                  placeholder="년 단위로 숫자만 입력"
                  validation={{ required: '년 단위로 숫자만 입력' }}
                />
              </div>
            </div>
            <div className={styles.infoBox}>
              <label className={styles.textLabel}>생년월일</label>
            </div>
            <div className={styles.birth}>
              <IdInput
                name="birth"
                type="text"
                placeholder="6자리 생년월일 입력"
                validation={{ required: '6자리 생년월일을 입력해주세요.' }}
              />
            </div>
            <div className={styles.checkContainer}>
              <input
                className={styles.checkBox}
                type="checkbox"
              />
              <label className={styles.checkLabel}>이용약관 동의(필수)</label>
            </div>
            <div className={styles.checkContainer}>
              <input
                className={styles.checkBox}
                type="checkbox"
              />
              <label className={styles.checkLabel}>
                개인정보 취급방침 동의(필수)
              </label>
            </div>
            <div className={styles.checkContainer}>
              <input
                className={styles.checkBox}
                type="checkbox"
              />
              <label className={styles.checkLabel}>
                마케팅 정보 수신 동의(선택)
              </label>
            </div>
            <Link
              href="/login/signin1"
              className={styles.welcome}>
              가입을 환영합니다!
            </Link>
          </div>
        </div>
      </div>
    </FormProvider>
  )
}

export default Page
