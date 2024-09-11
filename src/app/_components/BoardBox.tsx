import Link from 'next/link'
import styles from './BoardBox.module.scss'
import BoardSection from './BoardSection'

const boardTestContents = [
  {
    type: 'Design',
    content: '모아올리오에 한번에 모아 올렸습니다.'
  },
  {
    type: 'Frontend',
    content: '모아올리오에 한번에 모아 올렸습니다.'
  },
  {
    type: 'Frontend',
    content: '모아올리오에 한번에 모아 올렸습니다.'
  },
  {
    type: 'Backend',
    content: '모아올리오에 한번에 모아 올렸습니다.'
  }
]

const BoardBox = () => {
  return (
    <div className={styles.boardBoxWrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.text}>
          <span className={styles.titleText}>비슷한 분야의 사람들과 </span>
          이야기해요
        </div>
        <Link
          href="/"
          className={styles.more}>
          더보기
        </Link>
      </div>
      <div className={styles.realTimeBox}>
        <BoardSection
          title="실시간 인기글"
          contents={boardTestContents}
        />
        <BoardSection
          title="실시간 최신글"
          contents={boardTestContents}
        />
      </div>
    </div>
  )
}

export default BoardBox
