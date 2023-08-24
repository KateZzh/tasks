// Напиши компонент, который будет показывать случайную строку в h1 при нажатии на кнопку. слова хранятся в массиве

import { useState } from "react";

const Task19 = () => {
  const [value, setValue] = useState("");

  const arr = ["Hi", "Hello", "Hey"];

  const show = () => {
    setValue(arr[Math.round(Math.random() * 2)]);
  };

  return (
    <>
      <button onClick={show}>click me</button>
      <h1>{value}</h1>
    </>
  );
};

export default Task19;
