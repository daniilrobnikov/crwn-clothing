import CATEGORIES_ACTION_TYPES from './types'
import { createAction } from '../../utils/reducers/reducer'

export const fetchCategoriesRequest = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REQUEST)

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)

export const fetchCategoriesFail = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error)
