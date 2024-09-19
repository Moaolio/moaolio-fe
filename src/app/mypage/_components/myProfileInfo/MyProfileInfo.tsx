'use client'
import React from 'react'
import styles from '@/app/mypage/_components/myProfileInfo/MyProfileInfo.module.scss'

interface ProfileData {
  positions: string
  nickname: string
  introduction: string
  stack: string[]
  experience: string
  contactInformation: string[]
}

const MyProfileInfo: React.FC<{ profileData: ProfileData }> = ({
  profileData
}) => {
  return (
    <>
      <div className={styles.profileInfoContainer}>
        <div className={styles.profileUser}>
          <span className={styles.positions}>
            {profileData?.positions || '포지션 없음'}
          </span>
          <span className={styles.nickname}>
            {profileData?.nickname || '닉네임 없음'}
          </span>
          <span className={styles.introduction}>
            {profileData?.introduction || '자기소개 없음'}
          </span>
        </div>
        <div className={styles.userInfoBox}>
          <div className={styles.stackBox}>
            <span className={styles.stackTitle}>나의 스택목록</span>
            <ul>
              {profileData?.stack.length ? (
                profileData.stack.map((stack, index) => (
                  <li
                    key={index}
                    className={styles.stack}>
                    {stack}
                  </li>
                ))
              ) : (
                <li className={styles.stack}>스택 없음</li>
              )}
            </ul>
          </div>
          <div className={styles.ExperienceBox}>
            <span className={styles.experienceTitle}>경력</span>
            <div className={styles.experience}>
              {profileData?.experience || '경력 정보 없음'}
            </div>
            <div className={styles.contactBox}>
              <span className={styles.contactInformationTitle}>
                컨택 가능 주소
              </span>
              <ul>
                {profileData?.contactInformation.length ? (
                  profileData.contactInformation.map(
                    (contactInformation, index) => (
                      <li
                        key={index}
                        className={styles.contactInformation}>
                        {contactInformation}
                      </li>
                    )
                  )
                ) : (
                  <li className={styles.contactInformation}>
                    연락처 정보 없음
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProfileInfo
