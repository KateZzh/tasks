// 3. Отображение текста с использованием useState: Создайте компонент, который
// предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
// отображается текст, а при нажатии на "Скрыть" текст скрывается.

import { useState } from "react";

const Task24 = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div>
      <button onClick={() => setFlag(true)}>Показать</button>
      <button onClick={() => setFlag(false)}>Скрыть</button>
      <h1>{flag ? "Hello" : ""}</h1>
    </div>
  );
};

export default Task24;
