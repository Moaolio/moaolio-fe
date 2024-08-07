export interface UserSignUp {
  id: string
  password: string
  name: string
  nickName: string
}

export interface signUpTypes {
  userSignUp: UserSignUp
  setUserSignUp: (newState: Partial<UserSignUp>) => void
}
