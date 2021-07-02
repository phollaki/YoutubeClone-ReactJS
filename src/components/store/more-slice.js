import { createSlice } from "@reduxjs/toolkit";

const moreSlice = createSlice({
  name: "see more",
  initialState: { showMore: false },
  reducers: {
    showMore(state) {
      state.showMore = true;
    },
    hideMore(state) {
      state.showMore = false;
    },
  },
});
export const moreSliceActions = moreSlice.actions;
export default moreSlice;
