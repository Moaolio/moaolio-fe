'use client'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import BoardFormField from './_components/BoardFormField'
import styles from './styles.module.scss'

interface FormValues {
  title: string
  content: string
  // image: string
}
const NewPost = () => {
  const methods = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = data => {
    alert('제출 성공')
  }

  return (
    <div className={styles.formWrapper}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <BoardFormField />
          <button
            style={{ position: 'fixed', bottom: '10px' }}
            type="submit">
            제출
          </button>
        </form>
      </FormProvider>
    </div>
  )
}

export default NewPost
