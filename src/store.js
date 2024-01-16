import { configureStore } from "@reduxjs/toolkit"
import products from "./features/product"
import cart from "./features/cart"
export const store = configureStore({
  reducer: { 
    products,
    cart
  }
})