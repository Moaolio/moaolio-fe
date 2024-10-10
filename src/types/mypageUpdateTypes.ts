export interface ProfileState {
  mypageData: {
    editProfile: boolean
    positions: string
    nickname: string
    introduction: string
    stack: string[]
    experience: string
    contactInformation: string[]
    profileImageStr: string
  }
  clickEditProfile: () => void
  setProfileData: (data: Partial<ProfileState['mypageData']>) => void
}
