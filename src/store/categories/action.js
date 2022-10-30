import CATEGORIES_ACTION_TYPES from './types'
import { createAction } from '../../utils/reducers/reducer'

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)
