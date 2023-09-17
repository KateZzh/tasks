// у вас есть 3 кнопки: о нас, цена, главная страница

// в h1 текст того на какую кнопку вы нажали
// (если нажали на ,,цена,, отображать ,,цена,, в h1)

import { useState } from "react";

const Task20 = () => {
  const [value, setValue] = useState("");

  const show = (e) => {
    setValue(e.target.textContent);
  };

  return (
    <>
      <button onClick={show}>о нас</button>
      <button onClick={show}>цена</button>
      <button onClick={show}>главная страница</button>
      <h1>{value}</h1>
    </>
  );
};

export default Task20;
