import { createSlice } from "@reduxjs/toolkit";

const voiceSlice = createSlice({
  name: "voice",
  initialState: { showVoiceModal: false },
  reducers: {
    showVoiceModal(state) {
      state.showVoiceModal = true;
    },
    hideVoiceModal(state) {
      state.showVoiceModal = false;
    },
  },
});
export const voiceModalActions = voiceSlice.actions;
export default voiceSlice;
