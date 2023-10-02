import { createSlice } from "@reduxjs/toolkit";

const validEmail = createSlice({
  name: "validEmail",
  initialState: {
    input: "",
    result: false,
  },
  reducers: {
    fillInp: function (state, params) {
      return { ...state, input: params.payload };
    },
    isValidEmail: function (state) {
      if (/^[a-z0-9\-\.]+@[a-z]{1,10}.[a-z]{1,6}/gm.test(state.input)) {
        return { ...state, result: true };
      } else {
        return { ...state, result: false };
      }
    },
  },
});

export default validEmail.reducer;
export const { fillInp, isValidEmail } = validEmail.actions;
