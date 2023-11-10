// 2. Создайте компонент, который отображает список элементов с кнопками
// "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
// Используйте useCallback, чтобы оптимизировать функцию удаления элемента

import { useState, useCallback } from 'react';

const Task2 = () => {
  const [list, setList] = useState(['Hey', 'Hi', 'Hello']);

  const deleteElement = useCallback(
    (e) => {
      const filtered = list.filter((el) => el !== e.target.id);
      setList(filtered);
    },
    [list]
  );

  return (
    <div>
      <div>
        {list.map((el, index) => (
          <div key={index}>
            <span>{el}</span>
            <button id={el} onClick={deleteElement}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task2;
