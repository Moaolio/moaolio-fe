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
}

const Page = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1 // URL에서 현재 페이지 가져오기
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
      name: 'aaa'
    },
    { id: '2', position: 'Backend', title: 'Portfolio 2', name: 'bbb' },
    { id: '3', position: 'Designer', title: 'Portfolio 3', name: 'ccc' },
    { id: '4', position: 'DS', title: 'Portfolio 4', name: 'ddd' },
    { id: '5', position: 'DS', title: 'Portfolio 5', name: 'ddd' },
    { id: '6', position: 'DS', title: 'Portfolio 6', name: 'ddd' },
    { id: '7', position: 'DS', title: 'Portfolio 7', name: 'ddd' },
    { id: '8', position: 'DS', title: 'Portfolio 8', name: 'ddd' },
    { id: '9', position: 'DS', title: 'Portfolio 9', name: 'ddd' },
    { id: '10', position: 'DS', title: 'Portfolio 10', name: 'ddd' },
    { id: '11', position: 'DS', title: 'Portfolio 11', name: 'ddd' },
    { id: '12', position: 'DS', title: 'Portfolio 12', name: 'ddd' },
    { id: '13', position: 'DS', title: 'Portfolio 13', name: 'ddd' }
  ]
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
            <button className={styles.latestButton}>최신순</button>
            <button className={styles.popularButton}>인기순</button>
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
