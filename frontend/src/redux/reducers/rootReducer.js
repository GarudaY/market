import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
})

export default rootReducer
