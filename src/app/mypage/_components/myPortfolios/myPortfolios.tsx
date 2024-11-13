'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/app/mypage/_components/myPortfolios/myPortfolios.module.scss'
import Portfolio from '@/app/components/portfolio/Portfolio'
import axios from 'axios'
interface PortfolioData {
  id: string
  position: string
  title: string
  name: string
}

const MyPortfolios = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  // const [portfolioData, setPortfolioData] = useState<PortfolioData[]>([])

  // const fetchPortfolios = async () => {
  //   try {
  //     const response = await axios.get(`${apiUrl}/api/post/get/portfolio`)
  //     setPortfolioData(response.data)
  //   } catch (error) {
  //     console.error('Error fetching portfolio data:', error)
  //   }
  // }
  // useEffect(() => {
  //   fetchPortfolios()
  // }, [])

  // 예시 데이터 배열
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
    { id: '4', position: 'DS', title: 'Portfolio 4', name: 'ddd' },
    { id: '4', position: 'DS', title: 'Portfolio 4', name: 'ddd' },
    { id: '4', position: 'DS', title: 'Portfolio 4', name: 'ddd' },
    { id: '4', position: 'DS', title: 'Portfolio 4', name: 'ddd' },
    { id: '4', position: 'DS', title: 'Portfolio 4', name: 'ddd' },
    { id: '4', position: 'DS', title: 'Portfolio 4', name: 'ddd' },
    { id: '4', position: 'DS', title: 'Portfolio 4', name: 'ddd' },
    { id: '4', position: 'DS', title: 'Portfolio 4', name: 'ddd' }
  ]
  return (
    <>
      <div className={styles.profileInfoContainer}>
        <div className={styles.titleBox}>
          <span className={styles.portfolioTitle}>나의 포트폴리오</span>
          <span className={styles.portfolioCount}>
            총 {portfolioData.length}건의 포트폴리오
          </span>
        </div>
        <div className={styles.portfolioBox}>
          {portfolioData.map(portfolio => (
            <Portfolio
              key={portfolio.id}
              position={portfolio.position}
              title={portfolio.title}
              name={portfolio.name}
            />
          ))}
        </div>
      </div>
    </>
  )
}
export default MyPortfolios
