// 1. Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
// счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
// оптимизировать обработчик клика на кнопке

import { useState, useCallback } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Task1;
