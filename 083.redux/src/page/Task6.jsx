// 6. Создайте компонент, который отображает проверку почты (true, false) на
// валидность регулярному выражению. Валидатор состоит из Input для ввода почты
// и кнопки для запуска валидатора.

import { useDispatch, useSelector } from "react-redux";
import { fillInp, isValidEmail } from "../slice/validEmail";

const Task6 = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.validEmail);

  return (
    <div>
      <input onChange={(e) => dispatch(fillInp(e.target.value))} />
      <button onClick={() => dispatch(isValidEmail())}>click</button>
      <h1>{String(result)}</h1>
    </div>
  );
};

export default Task6;
