import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import CheckoutItem from '../../components/CheckoutItem'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>Total: ${cartTotal}</span>
      <style jsx>{`
        .checkout-container {
          width: 55%;
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 50px auto 0;
        }
        .checkout-container .checkout-header {
          width: 100%;
          padding: 10px 0;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid darkgrey;
        }

        .checkout-container .checkout-header .header-block {
          text-transform: capitalize;
          width: 23%;
        }
        .checkout-container .checkout-header .header-block:last-child {
          width: 8%;
        }

        .checkout-container .total {
          margin-top: 30px;
          margin-left: auto;
          font-size: 36px;
        }
      `}</style>
    </div>
  )
}

export default Checkout
