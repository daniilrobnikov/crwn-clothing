import './index.styles.scss'
import { Routes, Route } from 'react-router-dom'

import Categories from '../categories'
import Category from '../category'

const Shop = () => {
  return (
    <div className='shop-container'>
      <Routes>
        <Route index element={<Categories />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </div>
  )
}

export default Shop
