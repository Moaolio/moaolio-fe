import { create } from 'zustand'
import { signUpTypes } from '@/types/signUpTypes'

export const useSignUpStore = create<signUpTypes>(set => ({
  userSignUp: {
    uid: '',
    password: '',
    name: '',
    birth: ''
  },
  setUserSignUp: newState =>
    set(state => ({
      userSignUp: { ...state.userSignUp, ...newState }
    }))
}))
