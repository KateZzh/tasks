import { createSlice } from "@reduxjs/toolkit";

const increment = createSlice({
  name: "increment",
  initialState: 1,
  reducers: {
    countPlus: function (currentState) {
      return currentState + 1;
    },
  },
});

export const { countPlus } = increment.actions;
export default increment.reducer;
