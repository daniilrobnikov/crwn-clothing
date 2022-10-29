import './index.styles.scss'
import SignUpForm from '../../components/SignUpForm'
import SignInForm from '../../components/SignInForm'

const Auth = () => {
  return (
    <div className='auth'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Auth
