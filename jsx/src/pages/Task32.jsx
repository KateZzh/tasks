// 2. Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
// который увеличивает значение счетчика на 1 каждую секунду с использованием
// useEffect.

import { useState, useEffect } from "react";

const Task32 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const data = setInterval(doCounter, 1000);
    return () => clearInterval(data);
  });

  const doCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Task32;
