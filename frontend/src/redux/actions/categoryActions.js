import { fetchCategories } from '../api'

export const loadCategories = () => {
  return async (dispatch) => {
    try {
      const categories = await fetchCategories()
      dispatch({ type: 'LOAD_CATEGORIES', payload: categories })
    } catch (error) {
      console.error(error)
    }
  }
}
export const selectCategory = (categoryId) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: categoryId,
  }
}
