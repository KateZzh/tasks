// сделайте инпут в который вы пишете математическое выражение

// по клику на кнопку вы высчитываете результат мат выражения (eval()) и отображаете результат

import { useState } from "react";

const Task21 = () => {
  const [value, setValue] = useState("");

  const getValue = (e) => {
    setValue(e.target.value);
  };

  const show = () => {
    alert(eval(value));
  };

  return (
    <>
      <input onChange={getValue} type="text" />
      <button onClick={show}>click me</button>
    </>
  );
};

export default Task21;
