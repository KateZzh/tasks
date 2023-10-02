// 5. Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть".
// При нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст
// скрывается.

import { useDispatch, useSelector } from "react-redux";
import { show, hide } from "../slice/showText";

const Task5 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.showText);

  return (
    <div>
      <button onClick={() => dispatch(show())}>Показать</button>
      <button onClick={() => dispatch(hide())}>Скрыть</button>
      <h1>{state ? "Hello" : ""}</h1>
    </div>
  );
};

export default Task5;
