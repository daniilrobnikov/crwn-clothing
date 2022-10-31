import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../../store/cart/selector'

// Components
import CartItem from './CartItem'
import Button from '../../Button'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)

  const navigate = useNavigate()
  const handleCheckout = () => {
    navigate('/checkout')
  }
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
      <style jsx>{`
        .cart-dropdown-container {
          position: absolute;
          width: 250px; // 240px
          height: 340px;
          display: flex;
          flex-direction: column;
          padding: 20px;
          border: 1px solid black;
          background-color: white;
          top: 90px;
          right: 40px;
          z-index: 5;
        }
        .empty-message {
          font-size: 18px;
          margin: 50px auto;
        }

        .cart-items {
          height: 240px;
          display: flex;
          flex-direction: column;
          overflow: scroll;
        }
      `}</style>
      <style jsx global>{`
        button {
          margin-top: auto;
        }
      `}</style>
    </div>
  )
}

export default CartDropdown
