export const fetchCategories = async () => {
  try {
    const response = await fetch('http://localhost:3333/categories/all')
    if (response.ok) {
      const data = await response.json()
      return { categories: data }
    } else {
      throw new Error('Ошибка сети')
    }
  } catch (error) {
    console.error(error)
    return { categories: [] }
  }
}
export const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:3333/products/all')
    if (response.ok) {
      const data = await response.json()
      const productsWithQuantity = data.map((product) => ({
        ...product,
        quantity: 1,
      }))
      return productsWithQuantity
    } else {
      throw new Error('Ошибка сети')
    }
  } catch (error) {
    console.error(error)
    window.location.replace('/error')
    return []
  }
}
