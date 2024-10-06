import React from 'react'

const ProfileImageButton = () => {
  return (
    <div
      style={{
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none">
        <circle
          cx="16"
          cy="16"
          r="16"
          fill="#60B7CD"
        />
        <path
          d="M9 16H23M16 9V23"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default ProfileImageButton
