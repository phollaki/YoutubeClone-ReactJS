import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    showSidebar: false,
  },
  reducers: {
    showSidebar(state) {
      state.showSidebar = true;
    },
    hideSidebar(state) {
      state.showSidebar = false;
    },
  },
});

export const sideBarActions = sidebarSlice.actions;

export default sidebarSlice;
