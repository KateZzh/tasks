// 2. Разработайте компонент, который выполняет факториал числа при вводе
// значения в текстовое поле. Используйте useMemo, чтобы кэшировать результаты
// вычислений для разных введенных значений и отображать их без повторных
// вычислений.

import { useState, useMemo } from "react";

const Task37 = () => {
  const [val, setVal] = useState(1);
  const [res, setRes] = useState();

  const getFact = (val) => {
    if (val === 1) return 1;

    return val * getFact(val - 1);
  };

  const showFact = () => {
    if (!val) return;
    const fact = getFact(val);
    console.log(fact);
    setRes(fact);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(showFact, [val]);

  return (
    <div>
      <input type="text" onChange={(e) => setVal(+e.target.value)} />
      <h2>{res}</h2>
    </div>
  );
};

export default Task37;
