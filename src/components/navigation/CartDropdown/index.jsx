import './index.styles.scss'

import Button from '../../Button'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {/* {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))} */}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
