// 3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
// на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
// Используйте useCallback, чтобы оптимизировать функцию изменения статуса

import { useState, useCallback } from 'react';

const Task3 = () => {
  const [flag, setFlag] = useState(true);

  const changeFlag = useCallback(() => {
    setFlag(!flag);
  }, [flag]);

  return (
    <div>
      <button onClick={changeFlag}>Изменить статус</button>
      {flag ? <h1>Активный</h1> : <h1>Неактивный</h1>}
    </div>
  );
};

export default Task3;
