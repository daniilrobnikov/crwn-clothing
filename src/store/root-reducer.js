import { combineReducers } from 'redux'

import { userReducer } from './user/reducer'
import { categoriesReducer } from './categories/reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
})
