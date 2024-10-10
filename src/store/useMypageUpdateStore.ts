import { create } from 'zustand'
import { ProfileState } from '@/types/mypageUpdateTypes'

export const useMypagUpdateStore = create<ProfileState>(set => ({
  mypageData: {
    editProfile: false,
    positions: '',
    nickname: '',
    introduction: '',
    stack: [],
    experience: '',
    contactInformation: [],
    profileImageStr:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  },
  clickEditProfile: () =>
    set(state => ({
      mypageData: {
        ...state.mypageData,
        editProfile: !state.mypageData.editProfile
      }
    })),
  setProfileData: newState =>
    set(state => ({
      mypageData: { ...state.mypageData, ...newState }
    }))
}))
