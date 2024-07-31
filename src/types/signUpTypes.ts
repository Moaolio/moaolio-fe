export interface UserSignUp {
  id: string
  password: string
  email: string
  code: number
  name: string
  nickName: string
}

export interface signUpTypes {
  userSignUp: UserSignUp
  setUserSignUp: (newState: Partial<UserSignUp>) => void
}
