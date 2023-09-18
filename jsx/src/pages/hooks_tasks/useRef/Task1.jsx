// 1. Создайте компонент, который при каждом клике на кнопку увеличивает размер
// шрифта текста в элементе на странице.

import { useRef } from "react";

const Task33 = () => {
  const tag = useRef();

  const increasesFontSize = () => {
    tag.current.style.fontSize = `${parseInt(tag.current.style.fontSize) + 1}px`;
  };

  const decreasesFontSize = () => {
    tag.current.style.fontSize = `${parseInt(tag.current.style.fontSize) - 1}px`;
  };

  return (
    <div>
      <button onClick={increasesFontSize}>+</button>
      <button onClick={decreasesFontSize}>-</button>
      <p ref={tag} style={{ fontSize: "16px" }}>Text</p>
    </div>
  );
};

export default Task33;
