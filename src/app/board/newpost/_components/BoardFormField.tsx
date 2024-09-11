import TextArea from '@/components/TextArea/TextArea'
import TextInput from '@/components/TextInput/TextInput'
import styles from './BoardFormField.module.scss'

const BoardFormField = () => {
  return (
    <div className={styles.boardFormFieldWrapper}>
      <div className={styles.boardFormTitleContainer}>
        <label>제목</label>
        <TextInput
          name="title"
          type="text"
          validation={{ required: true }}
        />
      </div>
      <div className={styles.line}></div>
      <div>
        <label>내용, 이미지</label>
        <TextArea name="content" />
      </div>
    </div>
  )
}

export default BoardFormField
