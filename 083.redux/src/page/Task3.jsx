// 3. Создайте компонент текстового поля, который позволяет пользователю вводить
// текст и отображает его в реальном времени.

import { useDispatch, useSelector } from "react-redux";
import { showInp } from "../slice/inpValue";

const Task3 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.inpValue);

  return (
    <div>
      <input onChange={(e) => dispatch(showInp(e.target.value))} />
      <h1>{state}</h1>
    </div>
  );
};

export default Task3;
