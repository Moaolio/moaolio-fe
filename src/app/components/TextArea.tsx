import { RegisterOptions, useFormContext } from 'react-hook-form'
import styles from './style.module.scss'
import { FormEventHandler } from 'react'

interface TextAreaProps {
  name: string
  validation?: RegisterOptions
}

const TextArea = ({ name, validation }: TextAreaProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  // textarea 글 입력/변경 시, 자동 높이 조절
  const resizeHeight: FormEventHandler<HTMLTextAreaElement> = e => {
    const element = e.target as HTMLTextAreaElement
    element.style.height = 'auto' // 기존에 설정된 높이를 초기화하여 입력한 내용에 따라 텍스트 영역의 높이가 동적으로 조절되도록 함
    element.style.height = `${element.scrollHeight}px` // 텍스트 내용에 따른 실제 높이 계산
    window.scrollTo(0, document.body.scrollHeight + 80) // 가장 하단으로 스크롤 이동
  }
  return (
    <textarea
      className={styles.textareaStyle}
      onInput={resizeHeight}
      {...register(name, validation)}
    />
  )
}

export default TextArea
