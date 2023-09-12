// 1. Форма ввода с использованием useState и useEffect: Создайте компонент React,
// который содержит форму с полем ввода и кнопкой "Отправить". Используйте хук
// useState для хранения значения введенного текста и хук useEffect для
// отслеживания изменений этого значения. При каждом изменении значения в
// поле ввода, выводить его в консоль с помощью useEffect.

import { useState, useEffect } from "react";

const Task31 = () => {
  const [val, setVal] = useState();

  useEffect(() => {
    console.log(val);
  }, [val]);

  return (
    <div>
      <input type="text" onChange={(e) => setVal(e.target.value)} />
    </div>
  );
};

export default Task31;
