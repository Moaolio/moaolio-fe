'use client'
import React, { useState, useEffect } from 'react'
import styles from '@/app/portfoliolist/page.module.scss'
import Portfolio from '../components/portfolio/Portfolio'
import Header from '@/components/Header/Header'
import Pagination from '@/components/Pagination/Pagination'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
interface PortfolioData {
  id: string
  position: string
  title: string
  name: string
  date: string
}

const Page = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1 // URL에서 현재 페이지 가져오기
  const [filter, setFilter] = useState<'latest' | 'popular'>('latest')

  // const [portfolioData, setPortfolioData] = useState<PortfolioData[]>([])

  // const fetchPortfolios = async () => {
  //   try {
  //     const response = await axios.get(`${apiUrl}/api/post/get/portfolio`)
  //     setPortfolioData(response.data)
  //   } catch (error) {
  //     console.error('Error', error)
  //   }
  // }
  // useEffect(() => {
  //   fetchPortfolios()
  // }, [])

  // 예시 데이터 배열(테스트용)
  const portfolioData = [
    {
      id: '1',
      position: 'Frontend',
      title: 'Portfolio 1',
      name: 'aaa',
      date: '2024-11-08'
    },
    {
      id: '2',
      position: 'Backend',
      title: 'Portfolio 2',
      name: 'bbb',
      date: '2024-11-12'
    },
    {
      id: '3',
      position: 'Designer',
      title: 'Portfolio 3',
      name: 'ccc',
      date: '2024-11-11'
    },
    {
      id: '4',
      position: 'DS',
      title: 'Portfolio 4',
      name: 'ddd',
      date: '2024-11-10'
    },
    {
      id: '5',
      position: 'DS',
      title: 'Portfolio 5',
      name: 'ddd',
      date: '2024-11-09'
    },
    {
      id: '6',
      position: 'DS',
      title: 'Portfolio 6',
      name: 'ddd',
      date: '2024-11-08'
    },
    {
      id: '7',
      position: 'DS',
      title: 'Portfolio 7',
      name: 'ddd',
      date: '2024-11-07'
    },
    {
      id: '8',
      position: 'DS',
      title: 'Portfolio 8',
      name: 'ddd',
      date: '2024-11-06'
    },
    {
      id: '9',
      position: 'DS',
      title: 'Portfolio 9',
      name: 'ddd',
      date: '2024-11-05'
    },
    {
      id: '10',
      position: 'DS',
      title: 'Portfolio 10',
      name: 'ddd',
      date: '2024-11-04'
    },
    {
      id: '11',
      position: 'DS',
      title: 'Portfolio 11',
      name: 'ddd',
      date: '2024-11-03'
    },
    {
      id: '12',
      position: 'DS',
      title: 'Portfolio 12',
      name: 'ddd',
      date: '2024-11-02'
    },
    {
      id: '13',
      position: 'DS',
      title: 'Portfolio 13',
      name: 'ddd',
      date: '2024-11-01'
    }
  ]

  //인기순은 좋아요 기능 만든후 구현예정
  const sortedData = portfolioData.sort((a, b) => {
    if (filter === 'latest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return 0
  })

  const POSTS_PER_PAGE = 8
  const totalPages = Math.ceil(portfolioData.length / POSTS_PER_PAGE)
  const currentData = portfolioData.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.spanBox}>
          <span className={styles.titleSpan}>최신 포트폴리오</span>
          <span className={styles.explainSpan}>
            유저들에게 많은 인기를 끌고있는 포트폴리오
          </span>
        </div>
        <div className={styles.buttonBox}>
          <div className={styles.filterBox}>
            <button
              className={`${styles.latestButton}  ${filter === 'latest' ? styles.active : ''}`}
              onClick={() => setFilter('latest')}>
              최신순
            </button>
            <button
              className={`${styles.popularButton} ${filter === 'popular' ? styles.active : ''}`}
              onClick={() => setFilter('popular')}>
              인기순
            </button>
          </div>
          <Link href="/community/newpost">
            <button className={styles.writeButton}>작성하기</button>
          </Link>
        </div>
        <div className={styles.portfolioList}>
          {currentData.map(portfolio => (
            <Portfolio
              key={portfolio.id}
              position={portfolio.position}
              title={portfolio.title}
              name={portfolio.name}
            />
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          limit={POSTS_PER_PAGE}
        />
      </div>
    </>
  )
}

export default Page
