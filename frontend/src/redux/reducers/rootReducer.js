import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import productsReducer from './productsReducer'
import selectedProductReducer from './selectedProductReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  selectedProduct: selectedProductReducer,
  cart: cartReducer,
})

export default rootReducer
