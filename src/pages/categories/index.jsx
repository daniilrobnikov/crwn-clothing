import { useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'

import CategoryPreview from '../../components/CategoryPreview'

const Categories = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {Object.keys(categoriesMap).map((category) => (
        <CategoryPreview
          key={category}
          title={category}
          products={categoriesMap[category]}
        />
      ))}
    </>
  )
}

export default Categories
