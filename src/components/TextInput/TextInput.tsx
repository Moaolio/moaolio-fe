import { useFormContext, RegisterOptions } from 'react-hook-form'
import styles from './TextInput.module.scss'

interface InputProps {
  name: string
  type: string
  placeholder?: string
  validation?: RegisterOptions
}
const TextInput = ({ name, type, placeholder, validation }: InputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.inputStyle}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors[name] && (
        <p className={styles.errorMessage}>
          {errors[name]?.message?.toString() || '입력 필수'}
        </p>
      )}
    </div>
  )
}

export default TextInput
