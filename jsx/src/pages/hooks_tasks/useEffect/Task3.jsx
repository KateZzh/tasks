// 3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
// выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
// данные в заголовок с использованием useEffect.

import { useState, useEffect } from "react";
import axios from "axios";

const Task35 = () => {
  const [val, setVal] = useState();

  useEffect(() => {
    getData();
  }, [val]);

  async function getData() {
    const res = await axios.get("https://api.ipify.org/?format=json");
    setVal(res.data.ip);
  }

  return (
    <div>
      <h1>{val}</h1>
    </div>
  );
};

export default Task35;
