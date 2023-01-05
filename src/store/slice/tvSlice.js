import { createSlice } from "@reduxjs/toolkit";
import { tvInfoThunk, tvThunk } from "./thunk";
import { initialState } from "./initialState";

export const tvSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: {
    [tvThunk.pending]: (state) => {
      state.loading = true;
      state.items = [];
    },
    [tvThunk.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    [tvThunk.rejected]: (state) => {
      state.loading = false;
      state.items = [];
    },
    [tvInfoThunk.pending]: (state) => {
      state.filmLoading = true;
      state.filmItems = [];
    },
    [tvInfoThunk.fulfilled]: (state, action) => {
      state.filmItems = action.payload;
      state.filmLoading = false;
    },
    [tvInfoThunk.rejected]: (state) => {
      state.filmLoading = false;
      state.filmItems = [];
    },
  },
});

export const { setItems } = tvSlice.actions;

export default tvSlice.reducer;