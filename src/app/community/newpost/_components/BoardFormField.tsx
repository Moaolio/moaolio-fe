import TextArea from '@/components/TextArea/TextArea'
import TextInput from '@/components/TextInput/TextInput'
import styles from './BoardFormField.module.scss'
import { useFormContext, useWatch } from 'react-hook-form'

const BoardFormField = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const activeType = useWatch({
    name: 'type',
    defaultValue: 'board'
  })
  const selectedValue = useWatch({
    name: 'field',
    defaultValue: ''
  })

  return (
    <div className={styles.boardFormFieldWrapper}>
      <div className={styles.boardFormTitleContainer}>
        <div className={styles.boardFormSelectContainer}>
          <div className={styles.typeWrapper}>
            <div className={styles.radioContainer}>
              <label
                htmlFor="board"
                className={activeType === 'board' ? styles.activeLabel : ''}>
                게시판
              </label>
              <input
                type="radio"
                id="board"
                value="board"
                {...register('type')}
                checked={activeType === 'board'}
              />
            </div>
            <div className={styles.radioContainer}>
              <label
                htmlFor="portfolio"
                className={
                  activeType === 'portfolio' ? styles.activeLabel : ''
                }>
                포트폴리오
              </label>
              <input
                type="radio"
                id="portfolio"
                value="portfolio"
                {...register('type')}
                checked={activeType === 'portfolio'}
              />
            </div>
          </div>
          <div className={styles.fieldWrapper}>
            <select
              {...register('field', { required: '* 분야 선택 필수' })}
              className={selectedValue ? '' : styles.gray}>
              <option value="">분야를 선택하세요</option>
              <option value="Design">디자인</option>
              <option value="Frontend">프론트엔드</option>
              <option value="Backend">백엔드</option>
              <option value="Mobile">모바일</option>
              <option value="Other">기타</option>
            </select>

            {errors['field'] && (
              <p className={styles.errorMessage}>
                {errors['field']?.message?.toString() || '입력 필수'}
              </p>
            )}
          </div>
        </div>
        <TextInput
          name="title"
          type="text"
          placeholder="제목을 입력해주세요"
          validation={{
            required: '* 제목 입력 필수'
          }}
        />
      </div>
      <div className={styles.boardFormContentContainer}>
        <TextArea
          name="content"
          placeholder="내용을 입력해주세요"
        />
      </div>
    </div>
  )
}

export default BoardFormField
