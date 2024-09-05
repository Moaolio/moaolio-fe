import Link from 'next/link'
import NavBar from './NavBar'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <Link
        href="/"
        className={styles.headerTitle}>
        <h1>모아올리오</h1>
        <p>Creative portfolio home</p>
      </Link>
      <NavBar />
    </header>
  )
}

export default Header
