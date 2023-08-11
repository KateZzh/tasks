// У вас есть кнопка. После каждого нажатия менять ее цвет [‘red’, ‘white’, ‘blue’]
// рандомно

import React from "react";

function Task9() {
  function changeColor(event) {
    const arr = ["red", "white", "blue"];
    const random = Math.round(Math.random() * arr.length);

    event.target.style.backgroundColor = random === arr.length ? "green" : arr[random]; 
  }

  return (
    <div>
      <button style={{ width: "80px", height: "30px" }} onClick={changeColor}>
        click me
      </button>
    </div>
  );
}

export default Task9;
