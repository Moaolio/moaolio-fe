'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/app/mypage/_components/myProfileInfo.tsx/MyProfileInfo.module.scss'
import Header from '@/components/Header/Header'
import axios from 'axios'

interface ProfileData {
  positions: string
  nickname: string
  introduction: string
  stack: string[]
  experience: string
  contactInformation: string[]
}

const MyProfileInfo = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const [profileData, setProfileData] = useState<ProfileData | null>(null)

  /**
   * 사용자 정보 불러오기
   */
  useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/user/`)
        setProfileData(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getProfileData()
  }, [])

  return (
    <>
      <div className={styles.profileInfoContainer}>
        <div className={styles.profileUser}>
          <span className={styles.positions}>
            프론트엔드{profileData?.positions}
          </span>
          <span className={styles.nickname}>민수{profileData?.nickname}</span>
          <span className={styles.introduction}>
            안녕하세요~ 프엔 취준생 김민수입니다~{profileData?.introduction}
          </span>
        </div>
        <div className={styles.userInfoBox}>
          <div className={styles.stackBox}>
            <span className={styles.stackTitle}>나의 스택목록</span>
            <span className={styles.stack}>{profileData?.stack}</span>
          </div>
          <div className={styles.ExperienceBox}>
            <span className={styles.experienceTitle}>경력</span>
            <span className={styles.experience}>
              3년차{profileData?.experience}
            </span>
            <div className={styles.contactBox}>
              <span className={styles.contactInformationTitle}>
                컨택 가능 주소
              </span>
              <span className={styles.contactInformation}>
                010-0000-0000{profileData?.contactInformation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProfileInfo
