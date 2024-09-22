'use client'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import BoardFormField from './_components/BoardFormField'
import styles from './styles.module.scss'

interface FormValues {
  title: string
  content: string
  image?: FileList
}
const NewPost = () => {
  const methods = useForm<FormValues>()

  // 게시물 등록
  const onSubmit: SubmitHandler<FormValues> = data => {
    alert(`제출 성공 ${data.title}`)

    // api 통신 코드 작성 필요
  }

  return (
    <div className={styles.newPostWrapper}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={styles.boardInnerTop}>
            <h2>게시판/포트폴리오 글쓰기</h2>
            <div className={styles.buttonSection}>
              <label htmlFor="file-upload">+ 첨부파일</label>
              <input
                id="file-upload"
                type="file"
                {...methods.register('image')}
                multiple
              />
              <button>등록</button>
            </div>
          </div>
          <BoardFormField />
        </form>
      </FormProvider>
    </div>
  )
}

export default NewPost
