import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { CartItem, Product } from "../types/product"

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ product: Product; quantity: number }>) {
      const existing = state.items.find(item => item.product.id === action.payload.product.id)
      if (existing) {
        existing.quantity += action.payload.quantity
      } else {
        state.items.push({ product: action.payload.product, quantity: action.payload.quantity })
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.product.id !== action.payload)
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find(i => i.product.id === action.payload.id)
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter(i => i.product.id !== action.payload.id)
        } else {
          item.quantity = action.payload.quantity
        }
      }
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer

export const selectCartItems = (state: { cart: CartState }) => state.cart.items
export const selectCartCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => {
    const price = item.product.discountedPrice ?? item.product.price
    return total + price * item.quantity
  }, 0)
