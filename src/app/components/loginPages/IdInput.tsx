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
    formState: { errors }
  } = useFormContext()

  return (
    <input
      className={styles.idInputStyle}
      type={type}
      placeholder={placeholder}
      {...register(name, validation)}
    />
  )
}

export default IdInput
