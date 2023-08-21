// у тебя есть кнопка с названием ,,поздороваться,,. по клику на кнопку твоя задача отобразить
// в h1 ,,привет,,. при повторном клике на кнопку ,,поздороваться,, убирать ,,привет,, из h1

import { useState } from "react";

const Task10 = () => {
  const [value, setValue] = useState({str: "", flag: true});

  const show = () => {
    setValue((value.flag) ? {str: "Привет", flag: false} : {str: "", flag: true})
  };

  return (
    <>
      <button onClick={show}>поздороваться</button>
      <h1>{value.str}</h1>
    </>
  );
};

export default Task10;
