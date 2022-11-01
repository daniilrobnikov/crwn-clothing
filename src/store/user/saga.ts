import { takeLatest, all, call, put } from 'typed-redux-saga/macro'

import { USER_ACTION_TYPES } from './types'

import {
  signInSuccess,
  signInFail,
  signUpSuccess,
  signUpFail,
  signOutSuccess,
  signOutFail,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from './action'

import { User, UserCredential } from 'firebase/auth'

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalData,
  UserData,
} from '../../utils/firebase'
import { QueryDocumentSnapshot } from 'firebase/firestore'

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalData?: AdditionalData
) {
  try {
    const userSnapshot: QueryDocumentSnapshot<UserData> = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalData
    )
    if (userSnapshot) {
      yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    }
  } catch (error) {
    yield put(signInFail(error as Error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth: User = yield call(getCurrentUser)
    if (!userAuth) return
    yield call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield put(signInFail(error as Error))
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential: UserCredential = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    )

    if (userCredential) {
      const { user } = userCredential
      yield call(getSnapshotFromUserAuth, user)
    }
  } catch (error) {
    yield put(signInFail(error as Error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup)
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFail(error as Error))
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential: UserCredential = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    )
    if (userCredential) {
      const { user } = userCredential
      yield put(signUpSuccess(user, { displayName }))
    }
  } catch (error) {
    yield put(signUpFail(error as Error))
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalData },
}: SignUpSuccess) {
  yield call(getSnapshotFromUserAuth, user, additionalData)
}

export function* signOut() {
  try {
    yield call(signOutUser)
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFail(error as Error))
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onGoogleSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ])
}
