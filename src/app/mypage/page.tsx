import React from 'react'
import styles from '@/app/mypage/page.module.scss'
import ProfileImage from './_components/profileImage/ProfileImage'
import MyProfileInfo from './_components/myProfileInfo/MyProfileInfo'
import axios from 'axios'
import MypageBackgroundImage from '@/app/components/mypage/MypageBackgroundImage'
import Header from '@/components/Header/Header'
import BackgroundImage from '@/app/mypage/_components/BackgroundImage'

interface ProfileData {
  positions: string
  nickname: string
  introduction: string
  stack: string[]
  experience: string
  contactInformation: string[]
  profileImageUrl: string
}

const Page: React.FC<{ profileData: ProfileData }> = ({ profileData }) => {
  return (
    <>
      <Header />
      <div className={styles.profilePage}>
        <BackgroundImage />
        <MypageBackgroundImage />
        <div className={styles.pageComponants}>
          <ProfileImage profileData={profileData} />
          <MyProfileInfo profileData={profileData} />
        </div>
      </div>
    </>
  )
}

export const getDataProps = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  try {
    const response = await axios.get(`${apiUrl}/api/user/`)
    return {
      props: {
        profileData: response.data
      }
    }
  } catch (error) {
    console.error(error)
    //빈값이라도 렌더링하기 위하여
    return {
      props: {
        profileData: {
          positions: '',
          nickname: '',
          introduction: '',
          stack: [],
          experience: '',
          contactInformation: [],
          profileImageUrl:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        }
      }
    }
  }
}

export default Page
