'use client'
import React from 'react'
import styles from '@/app/mypage/_components/myPortfolios/myPortfolios.module.scss'
import Portfolio from '@/app/components/portfolio/Portfolio'

const MyPortfolios = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  // 예시 데이터 배열
  const portfolioData = [
    {
      id: 1,
      position: 'Frontend Developer',
      title: 'Portfolio 1',
      name: 'aaa'
    },
    { id: 2, position: 'Backend Developer', title: 'Portfolio 2', name: 'bbb' },
    { id: 3, position: 'UI/UX Designer', title: 'Portfolio 3', name: 'ccc' }
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
        <div>
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
