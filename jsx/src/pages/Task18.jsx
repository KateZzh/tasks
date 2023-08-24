// получить значение из 2 инпутов и отобразить это в консоль по клику на кнопку (одним useState)

import { useState } from "react";

const Task18 = () => {
  const [value, setValue] = useState({ name: "", pwd: "" });

  const getValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const show = () => {
    console.log(value);
  };

  return (
    <>
      <input name="name" onChange={getValue} type="text" />
      <input name="pwd" onChange={getValue} type="text" />
      <button onClick={show}>click me</button>
    </>
  );
};

export default Task18;
