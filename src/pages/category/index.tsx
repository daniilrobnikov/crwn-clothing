import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/selector'

import ProductCard from '../../components/CategoryPreview/ProductCard'
import Spinner from '../../components/Spinner'

type CategoryRouteParams = {
  category: string
}

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <h2 className='title'>{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='category-container'>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
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
