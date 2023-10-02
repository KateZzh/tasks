import { createSlice } from "@reduxjs/toolkit";

const showText = createSlice({
  name: "showText",
  initialState: false,
  reducers: {
    show: function () {
      return true;
    },
    hide: function () {
      return false;
    },
  },
});

export default showText.reducer;
export const { show, hide } = showText.actions;
