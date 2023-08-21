import { useState } from "react";

const Task10 = () => {
  const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };
  // const decrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <>
      <h1>{count}</h1>
      {/* <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button> */}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
};

export default Task10;
