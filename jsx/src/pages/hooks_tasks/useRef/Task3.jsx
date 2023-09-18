// 3. Реализуйте компонент, который отслеживает количество кликов на кнопку с
// помощью useRef и выводит это число при каждом клике.

import { useRef } from "react";

const Task42 = () => {
  const count = useRef(0);

  const change = () => {
    count.current.textContent = +count.current.textContent + 1;
  };

  return (
    <div>
      <button onClick={change}>click</button>
      <p ref={count}>{count.current}</p>
    </div>
  );
};

export default Task42;
