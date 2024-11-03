import React from 'react'
import styles from '@/app/mypage/page.module.scss'
import ProfileImage from './_components/profileImage/ProfileImage'
import MyPageArrow from '@/assets/icons/MypageArrow'
import Header from '@/components/Header/Header'
import BackgroundImage from '@/app/mypage/_components/BackgroundImage'
import ComponentsRendering from './_components/componentsRendering/ComponentsRendering'
const Page = () => {
  return (
    <>
      <Header />
      <div className={styles.profilePage}>
        <BackgroundImage />
        <MyPageArrow />
        <div className={styles.pageComponants}>
          <ProfileImage />
          <ComponentsRendering />
        </div>
      </div>
    </>
  )
}

export default Page
