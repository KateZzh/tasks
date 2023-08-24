// отображай в h1 каждое введенное значение из input

import { useState } from "react";

const Task17 = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} type="text" />
      <h1>{value}</h1>
    </>
  );
};

export default Task17;
