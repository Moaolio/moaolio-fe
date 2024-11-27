'use client'
import React from 'react'
import MyPortfolios from '../myPortfolios/MyPortfolios'
import MyProfileInfo from '../myProfileInfo/MyProfileInfo'
import MyScrapPortfolios from '../myScrapPortfolios/MyScrapPortfolios'
import MyPosts from '../myPosts/MyPosts'
import MyComments from '../myComments/MyComments'
import { useMypageSidebarStore } from '@/store/useMypageSidebarStore'

const ComponentsRendering = () => {
  const { currentSection } = useMypageSidebarStore()

  const renderComponent = () => {
    switch (currentSection) {
      case 'portfolio':
        return <MyPortfolios />
      case 'scrap':
        return <MyScrapPortfolios /> //미완성
      case 'posts':
        return <MyPosts /> //미완성
      case 'comments':
        return <MyComments /> //미완성
      case 'profile':
      default:
        return <MyProfileInfo />
    }
  }

  return <div>{renderComponent()}</div>
}

export default ComponentsRendering
