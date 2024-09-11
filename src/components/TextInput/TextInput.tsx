import { useFormContext, RegisterOptions } from 'react-hook-form'
import styles from './TextInput.module.scss'
interface InputProps {
  name: string
  type: string
  validation?: RegisterOptions
}
const TextInput = ({ name, type, validation }: InputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  return (
    <input
      className={styles.inputStyle}
      type={type}
      {...register(name, validation)}
    />
  )
}

export default TextInput
