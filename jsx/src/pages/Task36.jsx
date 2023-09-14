// 1. Создайте компонент React, который отображает сумму двух чисел. Используй хук
// useState для хранения значений чисел и хук useMemo для кэширования
// результата суммы. При изменении значений чисел, сумма должна
// пересчитываться только тогда, когда необходимо

import { useState, useMemo } from "react";

const Task36 = () => {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [res, setRes] = useState();

  const calc = () => {
    setRes(val1 + val2);
  };

  useMemo(calc, [val1, val2]);

  return (
    <div>
      <input type="text" onChange={(e) => setVal1(+e.target.value)} />
      <input type="text" onChange={(e) => setVal2(+e.target.value)} />
      <button onClick={calc}>get result</button>
      <h2>{res}</h2>
    </div>
  );
};

export default Task36;
