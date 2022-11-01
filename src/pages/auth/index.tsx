import SignUpForm from '../../components/SignUpForm'
import SignInForm from '../../components/SignInForm'

const Auth = () => {
  return (
    <div className='auth'>
      <SignInForm />
      <SignUpForm />
      <style jsx>{`
        .auth {
          display: flex;
          justify-content: space-between;
          width: 900px;
          margin: 30px auto;
        }
      `}</style>
    </div>
  )
}

export default Auth
