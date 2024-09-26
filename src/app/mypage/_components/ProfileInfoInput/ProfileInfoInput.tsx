'use client'
import React from 'react'
import styles from '@/app/mypage/_components/ProfileInfoInput/ProfileInfoInput.module.scss'
import { useFormContext, RegisterOptions } from 'react-hook-form'

interface ProfileInfoInputProps {
  name: string
  type: string
  placeholder?: string
  validation?: RegisterOptions
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ProfileInfoInput: React.FC<ProfileInfoInputProps> = ({
  name,
  type,
  placeholder,
  validation
}) => {
  const {
    register,
    formState: { errors, isSubmitted }
  } = useFormContext()
  const errorMessage = errors[name]?.message as string | undefined

  return (
    <>
      <input
        className={styles.ProfileInfoInputStyle}
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

export default ProfileInfoInput
