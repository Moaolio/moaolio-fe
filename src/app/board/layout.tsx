import Header from '@/components/Header/Header'
import { ReactNode } from 'react'

const Boardlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Boardlayout
