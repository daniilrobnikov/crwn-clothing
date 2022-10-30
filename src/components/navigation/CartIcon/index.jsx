import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'

import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>

      <style jsx>{`
        .cart-icon-container {
          width: 45px;
          height: 45px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .item-count {
          position: absolute;
          font-size: 10px;
          font-weight: bold;
          bottom: 12px;
        }
      `}</style>
      <style jsx global>{`
        .cart-icon-container .shopping-icon {
          width: 30px;
          height: 30px;
        }
      `}</style>
    </div>
  )
}

export default CartIcon
