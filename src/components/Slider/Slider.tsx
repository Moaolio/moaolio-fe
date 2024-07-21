'use client'

import Image from 'next/image'
import styles from './Slider.module.scss'
import { useCallback, useEffect, useState } from 'react'

interface SlideData {
  title: string
  subtitle: string
  highlight: string
  imageSrc: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
}

interface SliderProps {
  slides: SlideData[]
  autoplay?: boolean
}
const Slider = ({ slides, autoplay = true }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(nextSlide, 3000)
      return () => clearInterval(interval)
    }
  }, [autoplay, nextSlide])

  return (
    <div className={styles.slider}>
      <div className={styles.bullets}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.bullet} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}>
            <div className={styles.textWrapper}>
              <div>
                {slide.title} <br />
                <span className={styles.highlight}>{slide.highlight}</span>
              </div>
              <div>{slide.subtitle}</div>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={slide.imageSrc}
                alt={slide.imageAlt}
                width={slide.imageWidth}
                height={slide.imageHeight}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Slider
