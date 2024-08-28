'use client'

import Image from 'next/image'
import styles from './Carousel.module.scss'
import { useState } from 'react'

interface CarouselData {
  name: string
  link: string
}

interface CarouselProps {
  images: CarouselData[]
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNextClick = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselInner}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.imageWrapper}>
              <Image
                className={styles.imageContainer}
                src={image.link}
                alt={image.name}
                fill
              />
            </div>
          ))}
        </div>
      </div>
      {currentIndex > 0 && (
        <button
          className={styles.prevButton}
          onClick={handlePrevClick}>
          Prev
        </button>
      )}
      {currentIndex < images.length % 4 && (
        <button
          className={styles.nextButton}
          onClick={handleNextClick}>
          Next
        </button>
      )}
    </div>
  )
}

export default Carousel
