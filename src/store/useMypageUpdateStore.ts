import { create } from 'zustand'
import { ProfileState } from '@/types/mypageUpdateTypes'

export const useMypagUpdateStore = create<ProfileState>(set => ({
  editProfile: false,
  positions: '',
  nickname: '',
  introduction: '',
  stack: [],
  experience: '',
  contactInformation: [],

  clickEditProfile: () => set(state => ({ editProfile: !state.editProfile })),

  setProfileData: data =>
    set(() => ({
      positions: data.positions,
      nickname: data.nickname,
      introduction: data.introduction,
      stack: data.stack,
      experience: data.experience,
      contactInformation: data.contactInformation
    }))
}))
