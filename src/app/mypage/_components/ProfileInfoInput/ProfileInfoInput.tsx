'use client'
import React from 'react'
import styles from '@/app/mypage/_components/ProfileInfoInput/ProfileInfoInput.module.scss'
import { useFormContext, RegisterOptions } from 'react-hook-form'

interface ProfileInfoInputProps {
  uid: string
  type: string
  introduction: string
  experience: string

  placeholder?: string
  validation?: RegisterOptions
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ProfileInfoInput: React.FC<ProfileInfoInputProps> = ({
  uid,
  type,
  placeholder,
  validation
}) => {
  const {
    register,
    formState: { errors, isSubmitted }
  } = useFormContext()
  const errorMessage = errors[uid]?.message as string | undefined

  return (
    <>
      <input
        className={styles.ProfileInfoInputStyle}
        type={type}
        placeholder={placeholder}
        {...register(uid, validation)}
      />
      {isSubmitted && errors[uid] && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </>
  )
}

export default ProfileInfoInput
