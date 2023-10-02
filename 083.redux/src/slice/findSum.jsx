import { createSlice } from "@reduxjs/toolkit";

const findSum = createSlice({
  name: "findSum",
  initialState: {
    inp1: "",
    inp2: "",
    result: 0,
  },
  reducers: {
    fillInp1(state, params) {
      return { ...state, inp1: params.payload };
    },
    fillInp2(state, params) {
      return { ...state, inp2: params.payload };
    },
    doSum(state) {
      return { ...state, result: +state.inp1 + +state.inp2 };
    },
  },
});

export default findSum.reducer;
export const { fillInp1, fillInp2, doSum } = findSum.actions;
