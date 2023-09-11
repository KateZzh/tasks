// 7. Изменение размера шрифта с использованием useState: Создайте компонент,
// который предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на
// эти кнопки значение font-size изменяется соответствующим образом на +/– 1px.

import { useState } from "react";

const Task28 = () => {
  const [val, setVal] = useState(16);

  return (
    <div>
      <button onClick={() => setVal(val + 1)}>Increase</button>
      <button onClick={() => setVal(val - 1)}>Decrease</button>
      <p style={{ fontSize: `${val}px` }}>Text</p>
    </div>
  );
};

export default Task28;
