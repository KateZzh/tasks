import { createSlice } from "@reduxjs/toolkit";

const incrementDecrement = createSlice({
  name: "incrementDecrement",
  initialState: 0,
  reducers: {
    countPlus: function (currentState) {
      return currentState + 1;
    },

    countMinus: function (currentState) {
      return currentState - 1;
    },
  },
});

export default incrementDecrement.reducer;
export const { countPlus, countMinus } = incrementDecrement.actions;
