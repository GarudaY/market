const initialState = []

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

const getCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart')
  return cartData ? JSON.parse(cartData) : []
}

const cartReducer = (state = getCartFromLocalStorage(), action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCartAdd = [...state, action.payload]
      saveCartToLocalStorage(updatedCartAdd)
      return updatedCartAdd

    case 'REMOVE_FROM_CART':
      const indexToRemove = state.findIndex(
        (item) => item.id === action.payload
      )
      if (indexToRemove !== -1) {
        const updatedCartRemove = [...state]
        updatedCartRemove.splice(indexToRemove, 1)
        saveCartToLocalStorage(updatedCartRemove)
        return updatedCartRemove
      }
      return state

    case 'REMOVE_ALL_BY_ID':
      const updatedCartRemoveAllById = state.filter(
        (item) => item.id !== action.payload
      )
      saveCartToLocalStorage(updatedCartRemoveAllById)
      return updatedCartRemoveAllById

    case 'UPDATE_QUANTITY':
      const { productId, quantity } = action.payload
      const updatedCartQuantity = state.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
      saveCartToLocalStorage(updatedCartQuantity)
      return updatedCartQuantity

    case 'INIT_CART_FROM_STORAGE':
      return action.payload

    case 'CLEAR_CART':
      saveCartToLocalStorage([])
      return []

    default:
      return state
  }
}

export default cartReducer
