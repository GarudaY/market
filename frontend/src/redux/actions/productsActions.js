import { fetchProducts } from '../api'
export const loadProducts = () => {
  return async (dispatch) => {
    try {
      const products = await fetchProducts()
      dispatch({ type: 'LOAD_PRODUCTS', payload: products })
    } catch (error) {
      console.error(error)
    }
  }
}
