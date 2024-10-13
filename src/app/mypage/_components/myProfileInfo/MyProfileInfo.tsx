'use client'
import React, { useState } from 'react'
import styles from '@/app/mypage/_components/myProfileInfo/MyProfileInfo.module.scss'
import ProfileInfoInput from '@/app/mypage/_components/ProfileInfoInput/ProfileInfoInput'
import { FormProvider, useForm } from 'react-hook-form'
import PlusIcon from '@/assets/icons/PlusIcon'
import { useMypagUpdateStore } from '@/store/useMypageUpdateStore'
import StackModal from '../stackModal/StackModal'

const MyProfileInfo = () => {
  const {
    mypageData: {
      editProfile,
      positions,
      nickname,
      introduction,
      stack,
      experience,
      contactInformation
    }
  } = useMypagUpdateStore()
  const [openModal, setOpenModal] = useState(false)
  const [selectedStacks, setSelectedStacks] = useState<string[]>(stack || [])

  const methods = useForm({
    mode: 'onBlur',
    criteriaMode: 'all'
  })

  const stackModalOpen = () => {
    console.log('모달 열림')
    setOpenModal(true)
  }
  const stackModalClose = () => {
    console.log('모달 닫힘')
    setOpenModal(false)
  }

  const handleStackSelected = (stacks: string[]) => {
    setSelectedStacks(stacks)
  }

  return (
    <>
      {openModal && (
        <StackModal
          stackModalClose={stackModalClose}
          handleStackSelected={handleStackSelected}
        />
      )}
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
                placeholder="한줄 소개를 입력해주세요."
                validation={{ required: '한줄 소개를 입력해주세요.' }}
              />
            </div>
            <div className={styles.myStackBox}>
              <span className={styles.stackSpan}>
                나의 스택목록
                <div onClick={stackModalOpen}>
                  <PlusIcon />
                </div>
              </span>
              <ul className={styles.editStackList}>
                {selectedStacks.length ? (
                  selectedStacks.map((stack, index) => (
                    <li
                      key={index}
                      className={styles.editStack}>
                      {stack}
                    </li>
                  ))
                ) : (
                  <li className={styles.editStack}>스택 없음</li>
                )}
              </ul>
              <div className={styles.experienceBox}>
                <div>
                  <span className={styles.contactInformationSpan}>
                    컨택 가능 주소
                  </span>
                  <ul className={styles.editContactInformationList}>
                    <ProfileInfoInput
                      name="contactInformation"
                      type="text"
                      placeholder="컨택 가능한 주소를 입력해주세요."
                      validation={{
                        required: '컨택 가능한 주소를 입력해주세요.'
                      }}
                    />
                    <ProfileInfoInput
                      name="contactInformation"
                      type="text"
                      placeholder="컨택 가능한 주소를 입력해주세요."
                      validation={{
                        required: '컨택 가능한 주소를 입력해주세요.'
                      }}
                    />
                  </ul>
                </div>
                <div>
                  <span className={styles.experienceSpan}>경력 (몇 년)</span>
                  <ProfileInfoInput
                    name="experienceSpan"
                    type="text"
                    placeholder="경력 (몇 년)를 입력해주세요."
                    validation={{
                      required: '경력 (몇 년)를 입력해주세요.'
                    }}
                  />
                </div>
              </div>
            </div>
          </FormProvider>
        ) : (
          <>
            <div className={styles.profileUser}>
              <span className={styles.positions}>
                {positions || '포지션 없음'}
              </span>
              <span className={styles.nickname}>
                {nickname || '닉네임 없음'}
              </span>
              <span className={styles.introduction}>
                {introduction || '자기소개 없음'}
              </span>
            </div>
            <div className={styles.userInfoBox}>
              <div className={styles.stackBox}>
                <span className={styles.stackTitle}>나의 스택목록</span>
                <ul>
                  {stack.length ? (
                    stack.map((stack, index) => (
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
                  {experience || '경력 정보 없음'}
                </div>
                <div className={styles.contactBox}>
                  <span className={styles.contactInformationTitle}>
                    컨택 가능 주소
                  </span>
                  <ul>
                    {contactInformation.length ? (
                      contactInformation.map((contactInformation, index) => (
                        <li
                          key={index}
                          className={styles.contactInformation}>
                          {contactInformation}
                        </li>
                      ))
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
