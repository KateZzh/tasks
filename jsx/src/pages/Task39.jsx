// 4. Напишите программу, которая принимает строку от пользователя и выводит ее в
// обратном порядке. Используй хук useState для хранения строки и хук useMemo
// для кэширования результата.

import { useState, useMemo } from "react";

const Task39 = () => {
  const [val, setVal] = useState("");
  const [res, setRes] = useState("");

  const doRevers = () => {
    setRes(val.split("").reverse().join(""));
  };

  useMemo(doRevers, [val]);

  return (
    <div>
      <input type="text" onChange={(e) => setVal(e.target.value)} />
      <h2>{res}</h2>
    </div>
  );
};

export default Task39;
