// 5. Разработайте компонент, который позволяет пользователю изменять цвет фона
// элемента с помощью кнопок "Следующий цвет" и "Предыдущий цвет", используя
// useRef.

import { useRef, useState, useEffect } from "react";

const Task5 = () => {
  const [index, setIndex] = useState(0);
  const arr = useRef(["red", "black", "green", "blue"]);
  const tag = useRef();

  const instNextColor = () => {
    setIndex(index === arr.current.length - 1 ? 0 : index + 1);
  };

  const instPrevColor = () => {
    setIndex(index === 0 ? arr.current.length - 1 : index - 1);
  };

  useEffect(() => {
    tag.current.style.background = arr.current[index];
  }, [index]);

  return (
    <div>
      <h1 style={{ background: arr.current[0] }} ref={tag}>Hello!</h1>
      <button onClick={instPrevColor}>Предыдущий цвет</button>
      <button onClick={instNextColor}>Следующий цвет</button>
      <h1>{index}</h1>
    </div>
  );
};

export default Task5;
