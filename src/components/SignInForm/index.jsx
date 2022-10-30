import { useState } from 'react'

// Firebase utils
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase'

import FormInput from '../FormInput'
import Button from '../Button'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)

      // Reset form fields
      setFormFields(defaultFormFields)
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          alert('Wrong credentials')
          break
        default:
          console.log(error)
      }
    }
  }

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
      <style jsx>{`
        .sign-in-container {
          display: flex;
          flex-direction: column;
          width: 380px;
        }
        h2 {
          margin: 10px 0;
        }

        .buttons-container {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  )
}

export default SignInForm
