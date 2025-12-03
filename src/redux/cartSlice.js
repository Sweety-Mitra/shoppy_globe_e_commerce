import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [] // { id, title, price, thumbnail, quantity }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload
      const existing = state.items.find(i => i.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail || product.images?.[0] || '',
          quantity: 1
        })
      }
    },
    removeFromCart(state, action) {
      const id = action.payload
      state.items = state.items.filter(i => i.id !== id)
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find(i => i.id === id)
      if (item) item.quantity = Math.max(1, quantity)
    },
    clearCart(state) {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, setQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
