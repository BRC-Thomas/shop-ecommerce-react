import { configureStore } from "@reduxjs/toolkit"
import products from "./features/product"

export const store = configureStore({
  reducer: { 
    products
  }
})