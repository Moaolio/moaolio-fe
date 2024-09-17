import React from 'react'
import styles from '@/app/mypage/page.module.scss'
import ProfileImage from './_components/profileImage/ProfileImage'
import MyProfileInfo from './_components/myProfileInfo.tsx/MyProfileInfo'
import axios from 'axios'

interface ProfileData {
  positions: string
  nickname: string
  introduction: string
  stack: string[]
  experience: string
  contactInformation: string[]
}

const Page: React.FC<{ profileData: ProfileData }> = ({ profileData }) => {
  return (
    <div className={styles.profilePage}>
      <ProfileImage profileData={profileData} />
      <MyProfileInfo profileData={profileData} />
    </div>
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
          contactInformation: []
        }
      }
    }
  }
}

export default Page
