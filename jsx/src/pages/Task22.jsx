// 1. Счетчик с использованием useState: Создай компонент React, который отображает
// числовое значение и кнопки "+1" и "-1". Используйте хук useState для управления
// состоянием счетчика. При нажатии на кнопки, значение счетчика должно
// увеличиваться или уменьшаться.

import { useState } from "react";

const Task22 = () => {
  const [val, setVal] = useState(0);

  const increment = () => {
    setVal(val + 1);
  };

  const decrement = () => {
    setVal(val - 1);
  };

  return (
    <>
      <h1>{val}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
};

export default Task22;
