import { AnyAction } from 'redux'

import {
  signInSuccess,
  signOutSuccess,
  signInFail,
  signUpFail,
  signOutFail,
} from './action'
import { UserData } from '../../utils/firebase'

export type UserState = {
  readonly currentUser: UserData | null
  readonly error: Error | null
}

export const USER_INITIAL_STATE = {
  currentUser: null,
  error: null,
}

export const userReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload }
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null }
  }

  if (
    signInFail.match(action) ||
    signUpFail.match(action) ||
    signOutFail.match(action)
  ) {
    return { ...state, error: action.payload }
  }

  return state
}
