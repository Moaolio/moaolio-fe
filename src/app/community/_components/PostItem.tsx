import Link from 'next/link'
import styles from '../community.module.scss'

interface Post {
  id: number
  title: string
  createdAt: Date
}

const formatDate = (date: Date) => {
  return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`
}

const PostItem = ({ post, isNotice }: { post: Post; isNotice: boolean }) => (
  <Link
    href={`/community/${post.id}`}
    className={styles.boardListItem}>
    <div
      className={`${isNotice ? styles.notice : styles.postId} ${styles.postCommon}`}>
      {isNotice ? '공지' : post.id}
    </div>
    <div className={styles.postTitle}>{post.title}</div>
    <div className={`${styles.postDate} ${styles.postCommon}`}>
      {formatDate(post.createdAt)}
    </div>
  </Link>
)

export default PostItem
