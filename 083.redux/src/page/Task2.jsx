// 2. Создайте компонент, который будет отображать числовое значение и кнопки "+1"
// и "-1". При нажатии на кнопку увеличивать и уменьшать значения счетчика.

import { useDispatch, useSelector } from "react-redux";
import { countPlus, countMinus } from "../slice/incrementDecrement";

const Task2 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.incrementDecrement);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch(countPlus())}>+1</button>
      <button onClick={() => dispatch(countMinus())}>-1</button>
    </div>
  );
};

export default Task2;
