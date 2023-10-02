import { createSlice } from "@reduxjs/toolkit";

const palindrome = createSlice({
  name: "palindrome",
  initialState: {
    input: "",
    result: false,
  },
  reducers: {
    check: function (currentState) {
      const newStr = currentState.input.trim().split("").reverse().join("");
      return { ...currentState, result: currentState.input.trim() === newStr ? true : false };
    },
    fillInput: function (currentState, params) {
      return { ...currentState, input: params.payload };
    },
  },
});

export const { check, fillInput } = palindrome.actions;
export default palindrome.reducer;
