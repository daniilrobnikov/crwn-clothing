import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyBztNsZ_IhhH7Jn0E6eV0aXgdphjF--hbQ',
  authDomain: 'crwn-clothing-db-20182.firebaseapp.com',
  projectId: 'crwn-clothing-db-20182',
  storageBucket: 'crwn-clothing-db-20182.appspot.com',
  messagingSenderId: '214760267135',
  appId: '1:214760267135:web:b35299904d963940acce4a',
}

const firebaseApp = initializeApp(firebaseConfig)

// Sign In with Google
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})
export const auth = getAuth(firebaseApp)
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

// Export Database
export const db = getFirestore()

// Export functions
export const createUserDocumentFromAuth = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapShot = await getDoc(userDocRef)

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback)
}
