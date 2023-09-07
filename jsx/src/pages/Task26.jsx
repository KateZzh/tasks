// 5. Список задач с использованием useState: Создайте компонент списка задач,
// который позволяет пользователю добавлять и удалять задачи из списка.

import { useState } from "react";

const Task26 = () => {
  const [val, setVal] = useState("");
  const [array, setArray] = useState(["learn", "work", "rest"]);

  const pushTask = () => {
    setArray([...array, val]);
    setVal("");
  };

  const delTask = (e) => {
    const res = array.filter((el) => el !== e.target.id);
    setArray(res);
  };

  return (
    <>
      <div>
        {array.map((el, index) => (
          <div key={index}>
            <span>{el} </span>
            <button id={el} onClick={delTask}>
              delete
            </button>
          </div>
        ))}
      </div>

      <input type="text" onChange={(e) => setVal(e.target.value)} value={val} />
      <button onClick={pushTask}>click</button>
    </>
  );
};

export default Task26;
