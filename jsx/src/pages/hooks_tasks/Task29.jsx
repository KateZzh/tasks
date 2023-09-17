// 8. Отображение навигации с использованием useState: По нажатию на кнопку
// “бургер” отображать блок навигации из 4 параграфов.

import { useState } from "react";
import style from "./assets/style.module.css";

const Task29 = () => {
  const [flag, setFlag] = useState(false);

  const arr = ["test1", "test2", "test3", "test4"];

  return (
    <div>
      {/* <button onClick={() => setFlag(flag ? false : true)}>{flag ? "close" : "open"}</button> */}

      <div onClick={() => setFlag(flag ? false : true)} className={style.burger}></div>

      {flag ? arr.map((el, index) => <p key={index}>{el}</p>) : null}
    </div>
  );
};

export default Task29;
