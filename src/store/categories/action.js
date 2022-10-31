import CATEGORIES_ACTION_TYPES from './types'
import { createAction } from '../../utils/reducers/reducer'

import { getCategoriesAndDocuments } from '../../utils/firebase'

export const fetchCategoriesRequest = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REQUEST)

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)

export const fetchCategoriesFail = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error)

export const fetchCategoriesAsync = () => async (dispatch) => {
  try {
    dispatch(fetchCategoriesRequest())

    const categories = await getCategoriesAndDocuments('categories')
    dispatch(fetchCategoriesSuccess(categories))
  } catch (error) {
    dispatch(fetchCategoriesFail(error))
  }
}
