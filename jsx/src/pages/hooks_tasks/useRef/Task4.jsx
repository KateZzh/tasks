// 4. Создайте компонент, который по клику на кнопку добавляет рандомный color к
// заголовку

import { useRef } from "react";

const Task4 = () => {
  const tag = useRef();
  const arr = ["red", "black", "green", "blue"];

  const changeColor = () => {
    tag.current.style.color = arr[Math.round(Math.random() * arr.length)];
  };

  return (
    <div>
      <h1 ref={tag}>Hello!</h1>
      <button onClick={changeColor}>click</button>
    </div>
  );
};

export default Task4;
