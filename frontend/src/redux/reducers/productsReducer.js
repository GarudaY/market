const initialState = []

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return action.payload || state
    default:
      return state
  }
}

export default productsReducer
