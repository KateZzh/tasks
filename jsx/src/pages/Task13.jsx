// у тебя есть кнопка с названием ,,добавить цвет,,. по клику на кнопку
// твоя задача поменять цвет шрифта h1. при повторном клике цвет вернуть в первоначальное состояние

import { useState } from "react";
import style from "./assets/style.module.css";

const Task13 = () => {
  const [flag, setFlag] = useState(true);

  const show = () => {
     setFlag(flag ? false : true)
  };

  return (
    <>
      <button onClick={show}>добавить цвет</button>
      <h1 className={flag ? style.text1: style.text2}>Hello!</h1>
    </>
  );
};

export default Task13;
