const initialState = {
  categories: [],
  selectedCategory: null,
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CATEGORIES':
      return {
        ...state,
        categories: action.payload.categories,
      }
    case 'SELECT_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
      }
    default:
      return state
  }
}

export default categoryReducer
