import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../configs/axios/instance";
import {categoriesMapper, productMapper} from './mapper'

// Get Categories
export const getCategories = createAsyncThunk(
  "globalappslicer/getCategories",
  async (params) => {
    const response = await instance.get("/category-trees", {
      params,
    });
    console.log("My response :", response);
    return response.data;
  }
);


export const getProduct = createAsyncThunk(
  "globalappslicer/getProducts",
  async (params) => {
    const response = await instance.get('/catalog-search', {
      params,
    });
    return response.data
  }
)

// app slicer
export const appSlicer = createSlice({
  name: "globalappslicer",
  initialState: {
    categories: [],
    products: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.categories = [];
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = categoriesMapper(action.payload.data);
      })
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.products = [];
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = productMapper(action.payload.data);
      })
  },
});

export const homeSelector = (state) => state.appReducer;
export default appSlicer.reducer;
