'use client'
import React, { useRef, ChangeEvent, useState } from 'react'
import styles from '@/app/mypage/_components/profileImage/ProfileImage.module.scss'
import Image from 'next/image'
import { useMypagUpdateStore } from '@/store/useMypageUpdateStore'
import ProfileImageButton from '@/assets/icons/ProfileImageButton'
import axios from 'axios'

const ProfileImage = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const {
    mypageData: {
      editProfile,
      profileImageStr,
      positions,
      nickname,
      experience
    },
    clickEditProfile,
    setProfileData
  } = useMypagUpdateStore()
  const [preview, setPreview] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileData({
          profileImageStr: reader.result as string // 프로필 이미지 업데이트
        })
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleSaveProfile = async () => {
    try {
      // 현재 상태 데이터를 가져오기
      const { mypageData } = useMypagUpdateStore.getState()

      // 서버로 보낼 데이터
      const payload = {
        profileImageStr: mypageData.profileImageStr,
        positions: mypageData.positions,
        nickname: mypageData.nickname,
        experience: mypageData.experience,
        stack: mypageData.stack,
        contactInformation: mypageData.contactInformation,
        introduction: mypageData.introduction
      }

      // 서버로 데이터 전송
      const response = await axios.patch(`${apiUrl}/api/user/update`, payload)

      setProfileData(response.data)

      clickEditProfile()
    } catch (error) {
      console.error('프로필 업데이트 실패:', error)
    }
  }

  return (
    <div
      className={`${styles.profileImageContainer} ${editProfile ? styles.noShadow : ''}`}>
      <div className={styles.profileImage}>
        <Image
          src={preview || profileImageStr}
          alt="Profile"
          className={styles.profileImagePreview}
          width={167}
          height={167}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }} // 파일 선택 버튼 숨기기
          ref={fileInputRef}
        />
      </div>
      <div className={styles.profileListBox}>
        {editProfile ? (
          <>
            <div className={styles.profileList}>
              <div
                className={styles.profileImageButton}
                onClick={handleButtonClick}>
                <ProfileImageButton />
              </div>
              <div className={styles.editProfileBox}>
                <div className={styles.profileNickname}>
                  {nickname || '닉네임 없음'}
                </div>
                <div className={styles.profilePositionExperience}>
                  {positions || '포지션 없음'}
                  {' | '}
                  {experience || '경력 없음'}
                </div>
              </div>
              <button
                className={styles.editComplete}
                onClick={handleSaveProfile}>
                수정 완료
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.nicknameBox}>
              <span className={styles.nickname}>
                {nickname || '닉네임 없음'}
              </span>
              <span className={styles.positionExperience}>
                {positions || '포지션 없음'} | {experience || '경력 없음'}
              </span>
              <button className={styles.myButton}>나의 프로필</button>
              <button className={styles.myButton}>나의 포트폴리오</button>
              <button className={styles.myButton}>스크랩한 포트폴리오</button>
              <button className={styles.myButton}>내가 작성한 글</button>
              <button className={styles.myButton}>내가 작성한 댓글</button>
              <div className={styles.editBox}>
                <button
                  className={styles.editButton}
                  onClick={clickEditProfile}>
                  내 정보 수정
                </button>{' '}
                | <button className={styles.editButton}>Log out</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProfileImage
