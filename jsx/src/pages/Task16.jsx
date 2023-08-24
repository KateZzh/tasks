// Создай компонент, который будет отслеживать количество кликов по кнопке и отображать это количество

import { useState } from "react";

const Task16 = () => {
const [count, setCount] = useState(0)


  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  )
}

export default Task16;