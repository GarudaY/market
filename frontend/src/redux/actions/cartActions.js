// actions/cartActions.js
export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  }
}

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: productId,
  }
}
export const removeAllById = (id) => ({
  type: 'REMOVE_ALL_BY_ID',
  payload: id,
})
export const updateQuantity = (productId, quantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: { productId, quantity },
})

export const initializeCart = (cartItems) => ({
  type: 'INIT_CART_FROM_STORAGE',
  payload: cartItems,
})

export const clearCart = () => ({
  type: 'CLEAR_CART',
})
