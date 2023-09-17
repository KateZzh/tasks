// 4. Изменение цвета с использованием useState: Создайте компонент выбора цвета,
// который позволяет пользователю выбирать цвет из списка и отображает цвет
// выбранного цвета на экране.

import { useState } from "react";

const Task25 = () => {
  const [val, setVal] = useState("white");

  const changeColor = (e) => {
    setVal(e.target.textContent);
  };

  return (
    <div>
      <button onClick={changeColor}>red</button>
      <button onClick={changeColor}>blue</button>
      <button onClick={changeColor}>black</button>

      <div style={{ width: 300, height: 200, backgroundColor: `${val}` }}></div>
    </div>
  );
};

export default Task25;
