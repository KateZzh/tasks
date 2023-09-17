// По клику на кнопку собрать данные из input и проверить вводимую строку на
// палиндром

import React from "react";
import { useState } from "react";

function Task8() {
  const [inpValue, setInpValue] = useState("");

  function doInpValue(e) {
    setInpValue(e.target.value);
  }

  function isPalindrom() {
    try {
      if (inpValue !== inpValue.split("").reverse().join(""))
        throw new Error("it's not palindrome");

      alert("it's palindrome");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <input onChange={doInpValue} />
      <button onClick={isPalindrom}>click me</button>
    </div>
  );
}

export default Task8;
