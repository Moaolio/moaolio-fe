'use client'
import React, { ChangeEvent, useState } from 'react'
import styles from '@/app/mypage/page.module.scss'
import { HiOutlineUserCircle } from 'react-icons/hi2'

const Page = () => {
  //미리보기
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  //저장
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [editBtn, setEditBtn] = useState(false)
  const [profileInfo, setProfileInfo] = useState({
    name: '이름',
    techStack: '기술스택',
    career: '경력',
    email: '이메일',
    introduction: '자기소개'
  })

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      //미리보기 이미지
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveProfileImage = () => {
    if (selectedImage) {
      console.log('프로필 이미지 저장', selectedImage)
    }
  }

  const handleEditBtn = () => {
    setEditBtn(prevState => !prevState)
  }

  const handleCancelEdit = () => {
    setEditBtn(false)
    setSelectedImage(null)
    setPreviewImage(null)
  }

  //??
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setProfileInfo(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileImageContainer}>
        {previewImage ? (
          <div
            className={styles.profileImage}
            style={{ backgroundImage: `url(${previewImage})` }}></div>
        ) : (
          <HiOutlineUserCircle size={100} />
        )}
        <div className={styles.profileImageBtn}>
          {selectedImage ? (
            <>
              <label
                className={styles.profileImageSave}
                onClick={handleSaveProfileImage}>
                저장
              </label>
              <label
                className={styles.profileImageCancel}
                onClick={handleCancelEdit}>
                취소
              </label>
            </>
          ) : (
            <>
              <label
                htmlFor="imageInput"
                className={styles.profileImageSelect}>
                수정
              </label>
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }} // 인풋 필드를 숨김
                onChange={handleImageChange}
              />
            </>
          )}
        </div>
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.profileEdit}>
          {editBtn ? (
            Object.keys(profileInfo).map(key =>
              key === 'introduction' ? (
                <textarea
                  className={styles.textareaStyle}
                  key={key}
                  name={key}
                  value={profileInfo[key as keyof typeof profileInfo]}
                  onChange={handleChange}
                />
              ) : (
                <input
                  className={styles.inputStyle}
                  key={key}
                  name={key}
                  value={profileInfo[key as keyof typeof profileInfo]}
                  onChange={handleChange}
                />
              )
            )
          ) : (
            <>
              <div className={styles.profileName}>{profileInfo.name}</div>
              <div className={styles.techStack}>{profileInfo.techStack}</div>
              <div className={styles.career}>{profileInfo.career}</div>
              <div className={styles.email}>{profileInfo.email}</div>
              <div className={styles.introduction}>
                {profileInfo.introduction}
              </div>
            </>
          )}
          <label
            className={styles.editButton}
            onClick={handleEditBtn}>
            {editBtn ? '저장' : '수정'}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Page
