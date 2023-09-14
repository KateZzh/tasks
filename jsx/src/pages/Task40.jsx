// 5. Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес
// должен быть получен с использованием useMemo при монтировании
// компонента и кэширован для избегания повторных запросов к API при
// обновлении других частей компонента. https://api.ipify.org/?format=json

import { useState, useMemo } from "react";
import axios from "axios";

const Task40 = () => {
  const [val, setVal] = useState();

  const getData = async () => {
    const data = await axios.get("https://api.ipify.org/?format=json");
    setVal(data.data.ip);
  };

  useMemo(getData, []);

  return (
    <div>
      <h2>{val}</h2>
    </div>
  );
};

export default Task40;
