// 4. Таймер с использованием useState и useEffect: Создайте компонент, который
// отображает текущее время и обновляет его каждую секунду.

import { useState, useEffect } from "react";

const Task4 = () => {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => setData(new Date()), 1000);

    return () => clearInterval(time);
  }, [data]);

  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default Task4;
