// 9. Форма с отправкой запроса к API с использованием useState: Создайте
// компонент, который предоставляет input, button. После ввода данных в input по
// нажатию кнопку необходимо отправлять асинхронный запрос к API
// https://yesno.wtf/api с получением рандомно сгенерированного “да/нет”.
// Отобразить результат в заголовок. Таким образом у вас получается игра в
// предсказателя: где пользователь вводит вопрос в input, а далее получает ответ на
// заданный вопрос.

import { useState } from "react";
import axios from "axios";

const Task30 = () => {
  const [res, setRes] = useState("");
  const [val, setVal] = useState("");

  async function request() {
    const response = await axios.get("https://yesno.wtf/api");
    setRes(response.data.answer);
  }

  const question = (e) => {
    setVal(e.target.value);
    setRes("");
  };

  const show = () => {
    request();
    setVal("");
  };

  return (
    <div>
      <input type="text" onChange={question} value={val} />
      <button onClick={show}>click</button>

      {val === "" ? <h1>{res}</h1> : <h1>{val}</h1>}
    </div>
  );
};

export default Task30;
