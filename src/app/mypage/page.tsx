'use client'
import React, { ChangeEvent, useState } from 'react'
import styles from '@/app/mypage/page.module.scss'
import { FaUser } from 'react-icons/fa6'

const Page = () => {
  //미리보기
  const [previewImage, setpreviewImage] = useState<string | null>(null)
  //저장
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      //미리보기 이미지
      const reader = new FileReader()
      reader.onloadend = () => {
        setpreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  const handleSaveProfileImage = () => {
    if (selectedImage) {
      console.log('프로필 이미지 저장', selectedImage)
    }
  }

  return (
    <div>
      <div className={styles.profileImageContainer}>
        {previewImage ? (
          <div
            className={styles.profileImage}
            style={{ backgroundImage: `url(${previewImage})` }}></div>
        ) : (
          <FaUser size={100} />
        )}
        <div className={styles.profileImageBtn}>
          <label
            htmlFor="imageInput"
            className={styles.profileImageSelect}>
            선택
          </label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            style={{ display: 'none' }} // 인풋 필드를 숨김
            onChange={handleImageChange}
          />
          <label
            className={styles.profileImageSave}
            onClick={handleSaveProfileImage}>
            저장
          </label>
        </div>
      </div>
    </div>
  )
}

export default Page
