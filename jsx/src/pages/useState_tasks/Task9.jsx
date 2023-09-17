import React, { useState } from "react";

function Task9() {
  const [inp, setInp] = useState({ name: "", pwd: "" });
  const [inp2, setInp2] = useState([]);

  function show(e) {
    setInp({ ...inp, [e.target.name]: e.target.value });
  }

  return (
    <>
      {["name", "pwd"].map((el, index) => (
        <input name={el}  key={index} type="text" onChange={show} />
      ))}

      <button onClick={() => setInp2(inp)}>click me</button>
      <p>{JSON.stringify(inp2)}</p>
    </>
  );
}

export default Task9;
