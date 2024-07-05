'use client'
import React from 'react'
import styles from '@/app/portfolioDetail/page.module.scss'
import PortfolioComment from '@/app/components/portfolioComment/PortfolioComment'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import TextInput from '@/app/components/TextInput'

interface FormValues {
  content: string
}

const Page = () => {
  const methods = useForm<FormValues>()

  return (
    <div className={styles.portfolioDetailContainer}>
      <div className={styles.portfolioDetailImage}></div>
      <div className={styles.portfolioCommentBox}>
        <div className={styles.userName}></div>
        <div className={styles.portfolioDetail}></div>
        <div className={styles.portfolioLike}></div>
        <div className={styles.techStack}></div>
        <div className={styles.commentContainer}>
          <PortfolioComment />
        </div>
        <div className={styles.writeCommentBox}>
          <FormProvider {...methods}>
            <TextInput
              // className={styles.textInput}
              name="content"
              type="text"
              validation={{ required: true }}
            />
          </FormProvider>
          <button className={styles.postButton}>btn</button>
        </div>
      </div>
    </div>
  )
}

export default Page
