import { create } from 'zustand'
import { signUpTypes } from '@/types/signUpTypes'

export const useSignUpStore = create<signUpTypes>(set => ({
  userSignUp: {
    id: '',
    password: '',
    email: '',
    code: 0,
    name: '',
    nickName: ''
  },
  setUserSignUp: newState =>
    set(state => ({
      userSignUp: { ...state.userSignUp, ...newState }
    }))
}))
