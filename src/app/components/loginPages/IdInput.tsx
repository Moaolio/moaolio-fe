'use client'
import React from 'react'
import { useFormContext, RegisterOptions } from 'react-hook-form'
import styles from '@/app/components/loginPages/IdInput.module.scss'

interface IdInputProps {
  name: string
  type: string
  placeholder?: string
  validation?: RegisterOptions
}

const IdInput = ({ name, type, placeholder, validation }: IdInputProps) => {
  const {
    register,
    formState: { errors, isSubmitted }
  } = useFormContext()

  const errorMessage = errors[name]?.message as string | undefined

  return (
    <>
      <input
        className={styles.idInputStyle}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {isSubmitted && errors[name] && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </>
  )
}

export default IdInput
