'use client'
import React, { useRef, ChangeEvent, useState } from 'react'
import styles from '@/app/mypage/_components/profileImage/ProfileImage.module.scss'
import Image from 'next/image'
import { useMypagUpdateStore } from '@/store/useMypageUpdateStore'
import ProfileImageButton from '@/assets/icons/ProfileImageButton'

interface ProfileData {
  positions: string
  nickname: string
  introduction: string
  stack: string[]
  experience: string
  contactInformation: string[]
  profileImageUrl: string
}

const ProfileImage: React.FC<{ profileData: ProfileData }> = ({
  profileData
}) => {
  const { editProfile, clickEditProfile } = useMypagUpdateStore()
  const [preview, setPreview] = useState<string | null>(null)
  const [image, setImage] = useState<string>(
    profileData?.profileImageUrl ||
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  )

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div
      className={`${styles.profileImageContainer} ${editProfile ? styles.noShadow : ''}`}>
      <div className={styles.profileImage}>
        <Image
          src={preview || image}
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
                  {profileData?.nickname || '닉네임 없음'}
                </div>
                <div className={styles.profilePositionExperience}>
                  {profileData?.positions || '포지션 없음'}
                  {' | '}
                  {profileData?.experience || '경력 없음'}
                </div>
              </div>
              <button
                className={styles.editComplete}
                onClick={clickEditProfile}>
                수정 완료
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.nicknameBox}>
              <span className={styles.nickname}>
                {profileData?.nickname || '닉네임 없음'}
              </span>
              <span className={styles.positionExperience}>
                {profileData?.positions || '포지션 없음'} |{' '}
                {profileData?.experience || '경력 없음'}
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
