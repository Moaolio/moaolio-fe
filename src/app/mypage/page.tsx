import React from 'react'
import styles from '@/app/mypage/page.module.scss'
import ProfileImage from './_components/profileImage/ProfileImage'
import MyProfileInfo from '@/app/mypage/_components/myProfileInfo/MyProfileInfo'
import axios from 'axios'
import MyPageArrow from '@/assets/icons/MypageArrow'
import Header from '@/components/Header/Header'
import BackgroundImage from '@/app/mypage/_components/BackgroundImage'

const Page = () => {
  return (
    <>
      <Header />
      <div className={styles.profilePage}>
        <BackgroundImage />
        <MyPageArrow />
        <div className={styles.pageComponants}>
          <ProfileImage />
          <MyProfileInfo />
        </div>
      </div>
    </>
  )
}

export default Page
