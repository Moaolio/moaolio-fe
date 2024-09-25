'use client'

import { useRouter } from 'next/navigation'
import styles from './Pagination.module.scss'
import Image from 'next/image'

interface PagintaionProps {
  totalPages: number
  limit: number
  currentPage: number
}

const Pagination = ({ totalPages, limit, currentPage }: PagintaionProps) => {
  const router = useRouter()

  const currentRange = Math.ceil(currentPage / limit)
  const startPage = (currentRange - 1) * limit + 1
  const endPage = Math.min(startPage + limit - 1, totalPages)

  const goToPage = (pageNumber: number) => {
    router.push(`?page=${pageNumber}`)
  }

  return (
    <div className={styles.paginationWrapper}>
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(Math.max(startPage - limit, 1))}>
        <Image
          src="icons/previous.svg"
          alt="previous"
          width={4}
          height={9}
        />
        <Image
          src="icons/previous.svg"
          alt="previous"
          width={4}
          height={9}
        />
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(Math.max(currentPage - 1, 1))}>
        <Image
          src="icons/previous.svg"
          alt="previous"
          width={4}
          height={9}
        />
      </button>
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const pageNumber = startPage + index
        return (
          <button
            className={`${pageNumber === currentPage ? styles.currentButton : ''}`}
            key={pageNumber}
            onClick={() => goToPage(pageNumber)}>
            {pageNumber}
          </button>
        )
      })}
      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}>
        <Image
          src="icons/next.svg"
          alt="next"
          width={4}
          height={9}
        />
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(Math.min(endPage + 1, totalPages))}>
        <Image
          src="icons/next.svg"
          alt="next"
          width={4}
          height={9}
        />
        <Image
          src="icons/next.svg"
          alt="next"
          width={4}
          height={9}
        />
      </button>
    </div>
  )
}

export default Pagination
