// На входе 2 статичные переменные пароля. По клику на кнопку необходимо
// реализовать метод валидации. Написать регулярное выражение: пароль от 8
// символов, содержит числа, буквы, !@#$%^&*+=

import { useState } from "react";

function Task6() {
  const [inpPwd1, setInpPwd1] = useState("");
  const [inpPwd2, setInpPwd2] = useState("");

  function changeInpPwd1(e) {
    setInpPwd1(e.target.value);
  }

  function changeInpPwd2(e) {
    setInpPwd2(e.target.value);
  }

  function isValid() {
    try {
      if (inpPwd1 !== inpPwd2) throw new Error("doesn't match");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <input onChange={changeInpPwd1} />
      <input onChange={changeInpPwd2} />
      <button onClick={isValid}>click me</button>
    </div>
  );
}

export default Task6;
