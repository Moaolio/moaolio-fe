import Header from '@/components/Header/Header'
import { ReactNode } from 'react'
import styles from './community.module.scss'

const Boardlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main className={styles.mainWrapper}>{children}</main>
    </div>
  )
}

export default Boardlayout
