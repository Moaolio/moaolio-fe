import React, { ChangeEvent, useState } from 'react'
import styles from '@/app/mypage/page.module.scss'
import ProfileImage from './_components/profileImage/ProfileImage'
import MyProfileInfo from './_components/myProfileInfo.tsx/MyProfileInfo'

const Page = () => {
  return (
    <div className={styles.profilePage}>
      <ProfileImage />
      <MyProfileInfo />
    </div>
  )
}

export default Page
