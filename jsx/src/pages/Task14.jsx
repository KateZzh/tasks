// Текст кнопки открыто меняется на закрыто по нажатию на себя

import { useState } from "react";

const Task14 = () => {
const [value, setValue] = useState({flag: true, text: "открыто"})

const change = () => {
  setValue(value.flag ? {flag: false, text: "закрыто"} : {flag: true, text: "открыто"})
}

  return (
    <>
    <button onClick={change}>{value.text}</button>
    </>
  )
}

export default Task14;