import React from 'react'
import { useFormContext, RegisterOptions } from 'react-hook-form'
import styles from '@/app/components/loginPages/IdInput.module.scss'

interface IdInputProps {
  id: string
  type: string
  validation?: RegisterOptions
}

const IdInput = ({ id, type, validation }: IdInputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <input
      className={styles.idInputStyle}
      type={type}
      {...register(id, validation)}
      placeholder="아이디를 입력해주세요."
    />
  )
}

export default IdInput
