import styles from './BoardBox.module.scss'

interface BoardItem {
  type: string
  content: string
}

interface BoardSectionProps {
  title: string
  contents: BoardItem[]
}
const BoardSection = ({ title, contents }: BoardSectionProps) => {
  return (
    <div className={styles.boardBoxInner}>
      <div className={styles.innerText}>{title}</div>
      {contents.map((board, index) => (
        <div
          key={index}
          className={styles.boardContentsWrapper}>
          <div className={`${styles[board.type] || styles.default}`}>
            {board.type}
          </div>
          <div>{board.content}</div>
        </div>
      ))}
    </div>
  )
}

export default BoardSection
