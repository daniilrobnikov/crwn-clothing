// Redux
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/selector'

import CategoryPreview from '../../components/CategoryPreview'

const Categories = () => {
  const categoriesMap = useSelector(selectCategoriesMap)

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
