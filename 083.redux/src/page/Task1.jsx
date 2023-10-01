// 1. Создайте компонент инкремента. Компонент возвращает кнопку и параграф, в
// котором отображается значение (первоначальное значение 1). Ваша задача так
// реализовать функционал, чтобы при клике на кнопку автоматически
// прибавлялась +1 к значению параграфа

import { countPlus } from "../slice/increment";
import { useDispatch, useSelector } from "react-redux";

const Task1 = () => {
  const state = useSelector((state) => state.increment);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch(countPlus())}>+1</button>
    </div>
  );
};

export default Task1;
