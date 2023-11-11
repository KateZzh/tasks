// 4. Создайте компонент, который предоставляет пользователю выбор цвета из
// списка. При выборе цвета, компонент должен отображать выбранный цвет на
// странице. Используйте useCallback, чтобы оптимизировать функцию выбора
// цвета.

import { useCallback, useState } from 'react';

const Task4 = () => {
  const [color, setColor] = useState();
  const arr = ['red', 'blue', 'black', 'green'];

  const choiceColor = useCallback((e) => {
    setColor(e.target.textContent);
  }, []);

  return (
    <div>
      {arr.map((el, index) => (
        <p key={index} onClick={choiceColor}>
          {el}
        </p>
      ))}
      <div style={{ backgroundColor: color, width: 200, height: 200 }}></div>
    </div>
  );
};

export default Task4;
