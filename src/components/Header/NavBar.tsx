import Link from 'next/link'
import styles from './styles.module.scss'
import React from 'react'

const NavBar = () => {
  const links = [
    { href: '/', name: '소개' },
    { href: '/', name: '포트폴리오 모아보기' },
    { href: '/', name: '게시판' },
    { href: '/', name: '마이페이지' },
    { href: '/', name: '고객센터' }
  ]
  return (
    <nav className={styles.navWrapper}>
      <ul>
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <li>
              <Link href={link.href}>
                <div>{link.name}</div>
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
      <div className={styles.authArea}>
        <Link href="/">로그인</Link>
        <div className={styles.bar}>|</div>
        <Link href="/">회원가입</Link>
      </div>
    </nav>
  )
}

export default NavBar
