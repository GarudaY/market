const initialState = null

const selectedProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return action.payload
    default:
      return state
  }
}

export default selectedProductReducer
