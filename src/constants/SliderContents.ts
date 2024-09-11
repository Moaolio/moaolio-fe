interface SlideData {
  title: string
  highlight: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
}

export const MainSlides: SlideData[] = [
  {
    title: '깔끔하고 감각적인',
    highlight: '앱 UX/UI 포트폴리오',
    subtitle: '모아올리오에 한번에 모아 올렸습니다.',
    imageSrc: '/images/home-image.png',
    imageAlt: 'Slide 1',
    imageWidth: 822,
    imageHeight: 420
  },
  {
    title: '직관적인',
    highlight: '포트폴리오',
    subtitle: '모든 포트폴리오를 한 곳에 모아보세요.',
    imageSrc: '/images/home-image.png',
    imageAlt: 'Slide 2',
    imageWidth: 822,
    imageHeight: 420
  },
  {
    title: '다양하고 풍부한',
    highlight: '회사들의 포트폴리오',
    subtitle: '가지각색의 포트폴리오들이 있습니다..',
    imageSrc: '/images/home-image.png',
    imageAlt: 'Slide 3',
    imageWidth: 822,
    imageHeight: 420
  }
]
