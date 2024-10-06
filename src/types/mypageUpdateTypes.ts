export interface ProfileState {
  editProfile: boolean
  clickEditProfile: () => void
  positions: string
  nickname: string
  introduction: string
  stack: string[]
  experience: string
  contactInformation: string[]
  setProfileData: (data: {
    positions: string
    nickname: string
    introduction: string
    stack: string[]
    experience: string
    contactInformation: string[]
  }) => void
}
