import './index.styles.scss'
import { useContext, useState, useEffect } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'

import { useParams } from 'react-router-dom'

import ProductCard from '../../components/CategoryPreview/ProductCard'

const Category = () => {
  const [products, setProducts] = useState([])

  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <div className='category-container'>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Category
