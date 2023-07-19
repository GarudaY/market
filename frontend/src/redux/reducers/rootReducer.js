import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import productsReducer from './productsReducer'
import selectedProductReducer from './selectedProductReducer'

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  selectedProduct: selectedProductReducer,
})

export default rootReducer
