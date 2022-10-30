import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext)

  const handleRemoveItem = () => removeItemFromCart(cartItem)
  const handleAddItem = () => addItemToCart(cartItem)
  const handleClearItem = () => clearItemFromCart(cartItem)

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={handleClearItem}>
        &#10005;
      </div>
      <style jsx>{`
        .checkout-item-container {
          width: 100%;
          display: flex;
          min-height: 100px;
          border-bottom: 1px solid darkgrey;
          padding: 15px 0;
          font-size: 20px;
          align-items: center;
        }
        .checkout-item-container .image-container {
          width: 23%;
          padding-right: 15px;
        }
        .checkout-item-container .image-container img {
          width: 100%;
          height: 100%;
        }
        .checkout-item-container .name,
        .checkout-item-container .quantity,
        .checkout-item-container .price {
          width: 23%;
        }
        .checkout-item-container .quantity {
          display: flex;
        }
        .checkout-item-container .quantity .arrow {
          cursor: pointer;
        }

        .checkout-item-container .quantity .value {
          margin: 0 10px;
        }
        .checkout-item-container .remove-button {
          padding-left: 12px;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default CheckoutItem
