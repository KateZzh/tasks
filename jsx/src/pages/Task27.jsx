// 6. Форма с использованием useState: Создайте компонент текстового поля, который
// позволяет пользователю вводить текст и проверять введенный текст регулярным
// выражением на почту. В заголовок отобразить true если введенная строка
// удовлетворяет регулярному выражению и false в противном случае.

import { useState } from "react";

const Task27 = () => {
  const [val, setVal] = useState("");
  const [bool, setBool] = useState("");

  const checkVal = () => {
    setBool(!/^[\w\.\-]+@[a-z]{2,10}\.[a-z]{2,5}/gm.test(val) ? "false" : "true");
  };

  return (
    <>
      <input type="text" onChange={(e) => setVal(e.target.value)} />
      <button onClick={checkVal}>check</button>
      <h2>{bool}</h2>
    </>
  );
};

export default Task27;
