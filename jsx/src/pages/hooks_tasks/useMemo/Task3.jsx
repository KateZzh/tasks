// 3. Создайте компонент для отображения списка чисел от 1 до N, где N - число,
// введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить
// список чисел только при изменении N.

import { useState, useMemo } from "react";

const Task38 = () => {
  const [val, setVal] = useState();
  const [list, setList] = useState([]);

  const createArr = () => {
    const arr = [];
    for (let i = 0; i < val; i++) {
      arr.push(i + 1);
    }

    setList(arr);
  };

  useMemo(createArr, [val]);

  return (
    <div>
      <input type="text" onChange={(e) => { setVal(e.target.value) }} />

      {list.map((el, index) => ( <h2 key={index}>{el}</h2> ))}
    </div>
  );
};

export default Task38;
