import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sidebar-slice";
import moreBarSlice from "./more-slice";
import voiceModalSlice from "./voice-slice";
const store = configureStore({
  reducer: {
    sidebar: sideBarSlice.reducer,
    morebar: moreBarSlice.reducer,
    voiceModal: voiceModalSlice.reducer,
  },
});
export default store;
