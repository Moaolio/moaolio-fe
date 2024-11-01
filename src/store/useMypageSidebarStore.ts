import { create } from 'zustand'
import { MypageSidebarState, SidebarItem } from '@/types/mypageSidebarTypes'

export const useMypageSidebarStore = create<MypageSidebarState>(set => ({
  sidebarList: [
    { label: '나의 프로필', section: 'profile' },
    { label: '나의 포트폴리오', section: 'portfolio' },
    { label: '스크랩한 포트폴리오', section: 'scrap' },
    { label: '내가 작성한 글', section: 'posts' },
    { label: '내가 작성한 댓글', section: 'comments' }
  ],
  currentSection: 'profile',
  setCurrentSection: (section: string) => set({ currentSection: section })
}))
