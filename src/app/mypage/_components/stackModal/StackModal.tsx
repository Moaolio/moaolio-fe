import React, { useState } from 'react'
import styles from '@/app/mypage/_components/stackModal/StackModal.module.scss'

interface StackModalProps {
  stackModalClose: () => void
  handleStackSelected: (stack: string[]) => void
}

const StackModal: React.FC<StackModalProps> = ({
  stackModalClose,
  handleStackSelected
}) => {
  const [selectedStacks, setSelectedStacks] = useState<string[]>([])
  const [stacks] = useState<string[]>([
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next.js'
  ])

  /**
   * 모달 바깥클릭시 닫힘 함수
   */
  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      stackModalClose()
    }
  }

  const handleStackClick = (stack: string) => {
    if (selectedStacks.includes(stack)) {
      setSelectedStacks(selectedStacks.filter(s => s !== stack))
    } else if (selectedStacks.length < 3) {
      setSelectedStacks([...selectedStacks, stack])
    }
  }

  const removeStackClick = (stack: string) => {
    setSelectedStacks(selectedStacks.filter(s => s !== stack))
  }

  const completeClick = () => {
    handleStackSelected(selectedStacks)
    stackModalClose()
  }

  return (
    <div
      className={styles.background}
      onClick={handleOutsideClick}>
      <div className={styles.modalContainer}>
        <span className={styles.titleSpan}>스택을 선택해주세요.(최대 3개)</span>
        <div className={styles.searchBox}>
          Search <input className={styles.searchInput}></input>
        </div>
        <div className={styles.stackBox}>
          <div className={styles.selectedStack}>
            <ul>
              {selectedStacks.map((stack, index) => (
                <li
                  key={index}
                  className={styles.stacks}
                  onClick={() => removeStackClick(stack)}>
                  {stack}
                </li>
              ))}
            </ul>
          </div>
          <ul className={styles.stackList}>
            {stacks.map((stack, index) => (
              <li
                key={index}
                className={`${styles.stacks} ${
                  selectedStacks.includes(stack) ? styles.selected : ''
                }`}
                onClick={() => handleStackClick(stack)}>
                {stack}
              </li>
            ))}
          </ul>
        </div>
        <button
          className={styles.completeButton}
          onClick={completeClick}>
          완료
        </button>
      </div>
    </div>
  )
}

export default StackModal
