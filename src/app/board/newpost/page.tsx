'use client'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import BoardFormField from './_components/BoardFormField'
import styles from './styles.module.scss'
import axios from 'axios'

interface FormValues {
  type: string
  field: string
  title: string
  content?: string
  image?: FileList
}

const NewPost = () => {
  const methods = useForm<FormValues>()

  // API 요청 함수 분리
  const submitPost = async (url: string, data: FormData, token: string) => {
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
      throw new Error('Post submission failed')
    }
  }

  // 게시물 등록
  const onSubmit: SubmitHandler<FormValues> = async data => {
    const token = localStorage.getItem('token')
    if (!token) {
      console.error('No token found')
      return
    }

    // FormData로 이미지 파일 처리
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.content || '')

    // 게시판인 경우 카테고리 추가
    if (data.type === 'board') {
      formData.append('category', data.field)
    }

    // 이미지 파일 처리
    if (data.image) {
      Array.from(data.image).forEach(file => {
        formData.append('img', file) // 파일 배열 처리
      })
    }

    // URL 선택에 따라 API 요청
    const url =
      data.type === 'board'
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/post/create/community`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/post/create/portfolio`

    try {
      await submitPost(url, formData, token)

      alert('제출 성공')
    } catch (error) {
      alert('제출 실패')
    }
  }

  return (
    <div className={styles.newPostWrapper}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={styles.boardInnerTop}>
            <h2>게시판/포트폴리오 글쓰기</h2>
            <div className={styles.buttonSection}>
              <label
                htmlFor="file-upload"
                className={styles.fileUploadLabel}>
                + 첨부파일
              </label>
              <input
                id="file-upload"
                type="file"
                {...methods.register('image')}
                multiple
              />
              <button type="submit">등록</button>
            </div>
          </div>
          <BoardFormField />
        </form>
      </FormProvider>
    </div>
  )
}

export default NewPost
