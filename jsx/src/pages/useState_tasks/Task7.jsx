// По событию изменения input отображать в консоль каждое вводимое значение

import { useState } from "react";

function Task7() {
  const [inp, setInp] = useState("");

  function show(event) {
    setInp(event.target.value);
  }

  return (
    <div>
      <h1>{inp}</h1>
      <input onChange={show} />
    </div>
  );
}

export default Task7;
