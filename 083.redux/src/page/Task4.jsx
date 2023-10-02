// 4. Создайте компонент формы. По клику на кнопку собрать данные из input и
// проверить вводимую строку на палиндром

import { useDispatch, useSelector } from "react-redux";
import { fillInput, check } from "../slice/palindrome";

const Task4 = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.palindrome);

  return (
    <div>
      <input onChange={(e) => dispatch(fillInput(e.target.value))} />
      <button onClick={() => dispatch(check())}>click</button>
      <h1>{String(result)}</h1>
    </div>
  );
};

export default Task4;
