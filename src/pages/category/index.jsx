import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectCategoriesMap } from '../../store/categories/selector'

import ProductCard from '../../components/CategoryPreview/ProductCard'

const Category = () => {
  const [products, setProducts] = useState([])

  const { category } = useParams()

  const categoriesMap = useSelector(selectCategoriesMap)

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <h2 className='title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <style jsx>{`
        .category-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          column-gap: 10px;
          row-gap: 50px;
        }

        .title {
          font-size: 38px;
          margin-bottom: 25px;
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Category
