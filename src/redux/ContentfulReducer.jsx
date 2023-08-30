import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getSliderContent = (handler) => createAsyncThunk(
  'contentfulslicer/getSlider',
  async (params) => {
    const response = await handler(params)
    return response.data
  }
)


export const ContentfulSlicer = createSlice({
  name:'contentfulslicer',
  initialState:{},
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase()
  }
});


export const contentfulSelector = (state) => state.contentfulReducer
export default ContentfulSlicer.reducer