import { takeLatest, all, call, put } from 'typed-redux-saga/macro'
import { getCategoriesAndDocuments } from '../../utils/firebase'
import { fetchCategoriesSuccess, fetchCategoriesFail } from './action'

import { CATEGORIES_ACTION_TYPES } from './types'

import { Category } from './types'

export function* fetchCategoriesAsync() {
  try {
    const categories: Category[] = yield call(getCategoriesAndDocuments)
    yield put(fetchCategoriesSuccess(categories))
  } catch (error) {
    yield put(fetchCategoriesFail(error as Error))
  }
}
/**
 * @description This saga is responsible for listening to the action types
 */
export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  )
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)])
}
