import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../configs/axios/instance";
import { categoriesMapper, productMapper, paginationExtractor, abstractProduct } from "./mapper";

// Get Categories
export const getCategories = createAsyncThunk(
  "globalappslicer/getCategories",
  async (params) => {
    const response = await instance.get("/category-trees", {
      params,
    });
    return response.data;
  }
);

export const getProduct = createAsyncThunk(
  "globalappslicer/getProducts",
  async (params) => {
    const response = await instance.get("/catalog-search", {
      params,
    });
    return response.data;
  }
);

export const getAbstractProduct = createAsyncThunk(
  "globalappslicer/getAbstractProduct",
  async ({ params, productid }) => {
    const response = await instance.get(`/abstract-products/${productid}`, {
      params,
    });
    return response.data;
  }
);

// app slicer
export const appSlicer = createSlice({
  name: "globalappslicer",
  initialState: {
    categories: {
      data: [],
      loading: false,
    },
    products: {
      data: [],
      selectedProduct: {},
      loading: false,
      pagination: {},
    },
    wishlist: {
      products: [],
      loading: false,
    },
    shopingCart: {
      products: [],
      loading: false,
    },
    error: "",
  },
  reducers: {
    getSingleProduct: (state, action) => {
      state.products.selectedProduct = state.products.data.find(
        (e) => e.abstractSku === action.payload
      );
    },
    initCardAdd: (state, action) => {
      state.shopingCart.products.push(abstractProduct(action.payload));
    },
    addToCart: (state, action) => {
      state.shopingCart.products.push(abstractProduct(action.payload));
      localStorage.setItem('cart', JSON.stringify(state.shopingCart.products));
    },
    removeFromCart: (state, action) => {
      state.shopingCart.products = state.shopingCart.products.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem('cart', JSON.stringify(state.shopingCart.products));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.categories.loading = true;
        state.categories.data = [];
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories.loading = false;
        state.categories.data = categoriesMapper(action.payload.data);
      })
      .addCase(getProduct.pending, (state) => {
        state.products.loading = true;
        state.products.data = [];
        state.products.pagination = {};
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.products.loading = false;
        state.products.data = productMapper(action.payload.data);
        state.products.pagination = paginationExtractor(action.payload.data);
      })
      .addCase(getAbstractProduct.pending, (state) => {
        state.products.loading = true;
        state.products.selectedProduct = {};
      })
      .addCase(getAbstractProduct.fulfilled, (state, action) => {
        state.products.loading = false;
        state.products.selectedProduct = action.payload.data;
      });
  },
});

export const { getSingleProduct , addToCart, removeFromCart, initCardAdd} = appSlicer.actions;
export const homeSelector = (state) => state.appReducer;
export default appSlicer.reducer;
