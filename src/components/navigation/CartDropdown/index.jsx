import './index.styles.scss'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

import CartItem from './CartItem'
import Button from '../../Button'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  const navigate = useNavigate()
  const handleCheckout = () => {
    navigate('/checkout')
  }
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
