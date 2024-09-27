import { create } from 'zustand'
import { ProfileState } from '@/types/mypageUpdateTypes'

export const useMypagUpdateStore = create<ProfileState>(set => ({
  editProfile: false,
  clickEditProfile: () => set(state => ({ editProfile: !state.editProfile }))
}))
