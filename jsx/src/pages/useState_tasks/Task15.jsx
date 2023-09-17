// Сделай компонент выезжающего меню из 3 параграфов. по нажатию на кнопку
// ,,открыть,, отображаешь меню.

import { useState } from "react";

const Task15 = () => {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <button onClick={() => setFlag(flag ? false : true)}>{flag ? "close" : "open"}</button>

      <p>{flag}</p>

      {flag ? (
        <div>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Task15;
