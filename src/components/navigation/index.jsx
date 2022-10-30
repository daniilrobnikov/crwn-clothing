import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { CartContext } from '../../context/CartContext'

import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { signOutUser } from '../../utils/firebase'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from './CartIcon'
import CartDropdown from './CartDropdown'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <div className='navigation'>
        <div className='logo-container'>
          <Link to='/'>
            <CrwnLogo className='logo' />
          </Link>
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
      <style jsx>{`
        .navigation {
          height: 70px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .navigation .logo-container {
          height: 100%;
          width: 70px;
          padding: 25px;
        }

        .navigation .nav-links-container {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
      `}</style>
      <style jsx global>{`
        .navigation .nav-links-container .nav-link {
          padding: 10px 15px;
          cursor: pointer;
        }
      `}</style>
    </Fragment>
  )
}

export default Navigation
