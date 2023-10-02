// 7. Создайте компонент, который отображает сумму значений input. Компонент
// состоит из Input для ввода математического значения и кнопки сложения для
// высчитывания результата внутри строки.

import { useDispatch, useSelector } from "react-redux";
import { fillInp1, fillInp2, doSum } from "../slice/findSum";

const Task7 = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.findSum);

  console.log();
  return (
    <div>
      <input onChange={(e) => dispatch(fillInp1(e.target.value))} />
      <input onChange={(e) => dispatch(fillInp2(e.target.value))} />
      <button onClick={() => dispatch(doSum())}>click</button>
      <h1>{result}</h1>
    </div>
  );
};

export default Task7;
