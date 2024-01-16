import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: undefined,
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export function getProductsList(action) {
  return function (dispatch, getState) {
    fetch("/data/inventory.json")
      .then((res) => res.json())
      .then((data) => dispatch(addProducts(data.products)));
  };
}

export const { addProducts } = products.actions;
export default products.reducer;