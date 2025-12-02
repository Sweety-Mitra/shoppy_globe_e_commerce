import { createSlice } from '@reduxjs/toolkit'
const initialState = { items: [] }
const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addToCart( state, action ) { /* if exists inc quantity else push */ },
            removeFromCart( state, action ) { /* filter out id */ },
            setQuantity( state, action ) { /* set min 1 */ },
            clearCart( state ) { state.items = [] }
        }
    } )
export const { addToCart, removeFromCart, setQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
