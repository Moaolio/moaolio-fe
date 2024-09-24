// Board.tsx
import MoreIcon2 from '@/assets/MoreIcon2'
import styles from './community.module.scss'
import Link from 'next/link'
import SearchBar from '@/components/SearchBar/SearchBar'
import PostItem from './_components/PostItem'
import CommunitySearchBar from '@/components/SearchBar/CommunitySearchBar'

const communityTestData = [
  {
    id: 1,
    title: '[중요] 게시글 작성 가이드 안내1',
    createdAt: new Date('2024-01-01'),
    isNotice: true
  },
  {
    id: 2,
    title: '[중요] 게시글 작성 가이드 안내2',
    createdAt: new Date('2024-01-01'),
    isNotice: false
  },
  {
    id: 3,
    title: '[중요] 게시글 작성 가이드 안내3',
    createdAt: new Date('2024-01-01'),
    isNotice: true
  },
  {
    id: 4,
    title: '[중요] 게시글 작성 가이드 안내4',
    createdAt: new Date('2024-01-01'),
    isNotice: false
  },
  {
    id: 5,
    title: '[중요] 게시글 작성 가이드 안내5',
    createdAt: new Date('2024-01-01'),
    isNotice: true
  }
]

const Community = () => {
  const noticePosts = communityTestData.filter(post => post.isNotice)
  const posts = communityTestData.filter(post => !post.isNotice)

  return (
    <div className={styles.boardWrapper}>
      <div className={styles.boardHeader}>
        <div className={styles.headerLeftSection}>
          <div>자유게시판</div>
          <MoreIcon2 />
        </div>
        <div className={styles.headerRightSection}>
          <CommunitySearchBar />
          <Link href={'/community/newpost'}>작성하기</Link>
        </div>
      </div>
      <div className={styles.boardList}>
        <div className={styles.boardListItem}>
          <div className={styles.postCommon}>번호</div>
          <div className={styles.postCommon}>제목</div>
          <div className={styles.postCommon}>등록일</div>
        </div>
        {noticePosts.map(nPost => (
          <PostItem
            key={nPost.id}
            post={nPost}
            isNotice={true}
          />
        ))}
        {posts.map(post => (
          <PostItem
            key={post.id}
            post={post}
            isNotice={false}
          />
        ))}
      </div>
      <div className={styles.pagenation}>페이지네이션</div>
    </div>
  )
}

export default Community
