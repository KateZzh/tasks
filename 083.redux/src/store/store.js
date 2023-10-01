import { configureStore } from "@reduxjs/toolkit";
import increment from "../slice/increment";
import incrementDecrement from "../slice/incrementDecrement";
import inpValue from "../slice/inpValue";

const store = configureStore({
  reducer: {
    increment: increment,
    incrementDecrement: incrementDecrement,
    inpValue: inpValue,
  },
});

export default store;
