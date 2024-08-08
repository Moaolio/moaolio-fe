import { create } from 'zustand'
import { signUpTypes } from '@/types/signUpTypes'

export const useSignUpStore = create<signUpTypes>(set => ({
  userSignUp: {
    id: '',
    password: '',
    confirmPassword: '',
    name: '',
    birth: ''
  },
  setUserSignUp: newState =>
    set(state => ({
      userSignUp: { ...state.userSignUp, ...newState }
    }))
}))
