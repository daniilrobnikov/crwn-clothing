import USER_ACTION_TYPES from './types'
import { createAction } from '../../utils/reducers/reducer'

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
