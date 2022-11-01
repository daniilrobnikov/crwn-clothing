import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchCategoriesStart } from '../../store/categories/action'

// Components
import Categories from '../categories'
import Category from '../category'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [dispatch])

  return (
    <div className='shop-container'>
      <Routes>
        <Route index element={<Categories />} />
        <Route path=':category' element={<Category />} />
      </Routes>
      <style jsx>{`
        .shop-container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}

export default Shop
