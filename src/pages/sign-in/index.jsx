import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase'

const SignIn = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={signInWithGoogle}>Sign In With Google Popup</button>
    </div>
  )
}

export default SignIn
