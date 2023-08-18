import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../configs/axios/instance";

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

// app slicer
export const appSlicer = createSlice({
  name: "globalappslicer",
  initialState: {
    categories: {},
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
        state.categories = action.payload.data;
      });
  },
});

export const appSelector = (state) => state.globalappslicer;
export default appSlicer.reducer;
