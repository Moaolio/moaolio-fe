'use client'

import { useSearchParams } from 'next/navigation'
import MoreIcon2 from '@/assets/MoreIcon2'
import styles from './community.module.scss'
import Link from 'next/link'
import PostItem from './_components/PostItem'
import CommunitySearchBar from '@/components/SearchBar/CommunitySearchBar'

import { useMemo } from 'react'
import Pagination from '@/components/Pagination/Pagination'

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
  },
  {
    id: 6,
    title: '[중요] 게시글 작성 가이드 안내6',
    createdAt: new Date('2024-01-01'),
    isNotice: true
  },
  {
    id: 7,
    title: '[중요] 게시글 작성 가이드 안내6',
    createdAt: new Date('2024-01-01'),
    isNotice: false
  }
]

const POSTS_PER_PAGE = 5

const Community = () => {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const { paginatedPosts, totalPages, nPostCnt, postCnt, startIndex } =
    useMemo(() => {
      // 공지사항과 일반 게시글 필터링 및 정렬
      const noticePosts = communityTestData.filter(post => post.isNotice)
      const sortedNoticePosts = noticePosts.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      )
      const posts = communityTestData.filter(post => !post.isNotice)
      const sortedPosts = posts.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      )

      // 합쳐서 페이지네이션 처리
      const combinedPosts = [...sortedNoticePosts, ...sortedPosts]
      const startIndex = (currentPage - 1) * POSTS_PER_PAGE
      const paginated = combinedPosts.slice(
        startIndex,
        startIndex + POSTS_PER_PAGE
      )
      const total = Math.ceil(combinedPosts.length / POSTS_PER_PAGE)

      return {
        paginatedPosts: paginated,
        totalPages: total,
        nPostCnt: sortedNoticePosts.length,
        postCnt: sortedPosts.length,
        startIndex: startIndex
      }
    }, [currentPage]) // currentPage가 변경될 때만 재계산

  return (
    <div className={styles.boardWrapper}>
      <div className={styles.boardContainer}>
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
          {paginatedPosts.map((post, index) => {
            // 비공지 게시글의 displayNumber 계산
            const displayNumber = !post.isNotice
              ? postCnt - (startIndex + index - nPostCnt) // 비공지 게시글 번호 계산
              : null

            return (
              <PostItem
                key={post.id}
                post={post}
                isNotice={post.isNotice}
                displayNumber={displayNumber}
              />
            )
          })}
        </div>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        limit={POSTS_PER_PAGE}
      />
    </div>
  )
}

export default Community
