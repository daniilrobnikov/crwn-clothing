import { FC } from 'react'
import { Link } from 'react-router-dom'
import { CategoryItem } from '../../store/categories/types'

import ProductCard from './ProductCard'

type CategoryPreviewProps = {
  title: string
  products: CategoryItem[]
}
const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2 className='title'>
        <Link to={`/shop/${title}`}>{title.toUpperCase()}</Link>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <style jsx>{`
        .category-preview-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 30px;
        }
        .category-preview-container .preview {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          column-gap: 20px;
        }
        .category-preview-container .title {
          font-size: 28px;
          margin-bottom: 25px;
          cursor: pointer;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default CategoryPreview
