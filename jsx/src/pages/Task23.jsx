// 2. Форма с использованием useState: Создайте компонент текстового поля, который
// позволяет пользователю вводить текст и отображает его в реальном времени.

import { useState } from "react";

const Task23 = () => {
  const [val, setVal] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setVal(e.target.value)} />
      <h1>{val}</h1>
    </>
  );
};

export default Task23;
