import './index.styles.scss'

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
    </Fragment>
  )
}

export default Navigation
