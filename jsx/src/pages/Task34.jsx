// 2. Создайте компонент, который при фокусе на текстовом поле добавляет
// background (событие onFocus)

import { useRef } from "react";

const Task34 = () => {
  const tag = useRef();
  const arr = ["red", "green", "blue"];

  const changeColor1 = () => {
    tag.current.style.background = arr[Math.round(Math.random() * arr.length)];
  };

  const changeColor2 = () => {
    tag.current.style.background = "white";
  };

  return (
    <div>
      <input type="text" ref={tag} onFocus={changeColor1} onBlur={changeColor2} />
    </div>
  );
};

export default Task34;
