import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sidebar-slice";
const store = configureStore({
  reducer: {
    sidebar: sideBarSlice.reducer,
  },
});
export default store;
