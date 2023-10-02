import { configureStore } from "@reduxjs/toolkit";
import increment from "../slice/increment";
import incrementDecrement from "../slice/incrementDecrement";
import inpValue from "../slice/inpValue";
import palindrome from "../slice/palindrome";
import showText from "../slice/showText";
import validEmail from "../slice/validEmail";
import findSum from "../slice/findSum";

const store = configureStore({
  reducer: {
    increment,
    incrementDecrement,
    inpValue,
    palindrome,
    showText,
    validEmail,
    findSum,
  },
});

export default store;
