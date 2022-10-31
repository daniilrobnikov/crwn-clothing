import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../../store/cart/action'
import { selectCartItems } from '../../../store/cart/selector'

import Button from '../../Button'

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product
  const cartItems = useSelector(selectCartItems)

  const dispatch = useDispatch()

  const handleAddItemToCart = () => {
    dispatch(addItemToCart(cartItems, product))
  }

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={handleAddItemToCart}>
        Add to Cart
      </Button>
      <style jsx>{`
        .product-card-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          height: 350px;
          align-items: center;
          position: relative;
        }
        .product-card-container img {
          width: 100%;
          height: 95%;
          object-fit: cover;
          margin-bottom: 5px;
        }

        .product-card-container:hover img {
          opacity: 0.8;
        }

        .product-card-container .footer {
          width: 100%;
          height: 5%;
          display: flex;
          justify-content: space-between;
          font-size: 18px;
        }
        .product-card-container .footer .name {
          width: 90%;
          margin-bottom: 15px;
        }

        .product-card-container .footer .price {
          width: 10%;
        }
      `}</style>
      <style jsx global>{`
        .product-card-container button {
          width: 80%;
          opacity: 0.7;
          position: absolute;
          top: 255px;
          display: none;
        }
        .product-card-container:hover button {
          opacity: 0.85;
          display: flex;
        }
      `}</style>
    </div>
  )
}

export default ProductCard
