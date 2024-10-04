'use client'
import React, { useState } from 'react'
import styles from '@/app/mypage/_components/myProfileInfo/MyProfileInfo.module.scss'
import ProfileInfoInput from '@/app/mypage/_components/ProfileInfoInput/ProfileInfoInput'
import { FormProvider, useForm } from 'react-hook-form'
import PlusIcon from '@/assets/icons/PlusIcon'
import { useMypagUpdateStore } from '@/store/useMypageUpdateStore'
import StackModal from '../stackModal/StackModal'

interface ProfileData {
  positions: string
  nickname: string
  introduction: string
  stack: string[]
  experience: string
  contactInformation: string[]
}

const MyProfileInfo: React.FC<{
  profileData: ProfileData
}> = ({ profileData }) => {
  const { editProfile } = useMypagUpdateStore()
  const [openModal, setOpenModal] = useState(false)
  const methods = useForm<ProfileData>({
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues: profileData // 초기값 설정
  })

  const stackModalOpen = () => {
    console.log('모달 열림')
    setOpenModal(true)
  }
  const stackModalClose = () => {
    console.log('모달 닫힘')
    setOpenModal(false)
  }

  return (
    <>
      {openModal && <StackModal stackModalClose={stackModalClose} />}
      <div className={styles.profileInfoContainer}>
        {editProfile ? (
          <FormProvider {...methods}>
            <div className={styles.userBox}>
              <span className={styles.nicknameSpan}>닉네임</span>
              <ProfileInfoInput
                name="nickname"
                type="text"
                placeholder="닉네임을 입력해주세요."
                validation={{ required: '닉네임을 입력해주세요.' }}
              />
              <span className={styles.inroductionSpan}>한줄 소개</span>
              <ProfileInfoInput
                name="introduction"
                type="text"
                placeholder="한줄소개를 입력해주세요."
                validation={{ required: '한줄소개를 입력해주세요.' }}
              />
            </div>
            <div className={styles.myStackBox}>
              <span className={styles.stackSpan}>
                나의 스택목록
                <div onClick={stackModalOpen}>
                  <PlusIcon />
                </div>
              </span>
            </div>
          </FormProvider>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  )
}
export default MyProfileInfo
