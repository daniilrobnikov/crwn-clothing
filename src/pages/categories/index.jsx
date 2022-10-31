// Redux
import { useSelector } from 'react-redux'
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/selector'

import CategoryPreview from '../../components/CategoryPreview'
import Spinner from '../../components/Spinner'

const Categories = () => {
  const categories = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((category) => (
          <CategoryPreview
            key={category}
            title={category}
            products={categories[category]}
          />
        ))
      )}
    </>
  )
}

export default Categories
