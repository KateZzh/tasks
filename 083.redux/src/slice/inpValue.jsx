import { createSlice } from "@reduxjs/toolkit";

const inpValue = createSlice({
  name: "inpValue",
  initialState: "",
  reducers: {
    showInp: function (state, params) {
      return params.payload;
    },
  },
});

export default inpValue.reducer;
export const { showInp } = inpValue.actions;
