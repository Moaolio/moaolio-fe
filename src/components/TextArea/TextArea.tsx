import { RegisterOptions, useFormContext } from 'react-hook-form'
import styles from './TextArea.module.scss'

interface TextAreaProps {
  name: string
  placeholder?: string
  validation?: RegisterOptions
}

const TextArea = ({ name, placeholder, validation }: TextAreaProps) => {
  const { register } = useFormContext()

  return (
    <textarea
      className={styles.textareaStyle}
      placeholder={placeholder}
      {...register(name, validation)}
    />
  )
}

export default TextArea
