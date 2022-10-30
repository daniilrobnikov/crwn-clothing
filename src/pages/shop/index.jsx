import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

// Redux
import { getCategoriesAndDocuments } from '../../utils/firebase'
import { setCategoriesMap } from '../../store/categories/action'

// Components
import Categories from '../categories'
import Category from '../category'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      dispatch(setCategoriesMap(categoryMap))
    }
    getCategories()
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
