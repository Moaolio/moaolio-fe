export interface UserSignUp {
  id: string
  password: string
  name: string
  birth: string
  email: string
}

export interface signUpTypes {
  userSignUp: UserSignUp
  setUserSignUp: (newState: Partial<UserSignUp>) => void
}