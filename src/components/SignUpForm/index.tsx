import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AuthError, AuthErrorCodes } from 'firebase/auth'

import { signUpStart } from '../../store/user/action'

//Components
import FormInput from '../FormInput'
import Button from '../Button'

const defaultFormFields = {
  email: '',
  password: '',
  confirmPassword: '',
  displayName: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password, confirmPassword, displayName } = formFields

  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))

      // Reset form fields
      setFormFields(defaultFormFields)
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Email already in use')
      } else {
        console.log(error)
      }
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
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
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <Button type='submit'>Sign Up</Button>
      </form>
      <style jsx>{`
        .sign-up-container {
          display: flex;
          flex-direction: column;
          width: 380px;
        }
        h2 {
          margin: 10px 0;
        }
      `}</style>
    </div>
  )
}

export default SignUpForm
