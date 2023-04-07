// Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
// распознать по какому из значений контейнера производится событие клика. Если
// клик происходит, то удалить данное значение из массива в div

document.querySelector("button").addEventListener("click", () => {
  const div1 = document.querySelector(".div1");
  const div2 = document.querySelector(".div2");
  let arr = [];
  let newArr = [];

  for (let i = 0; i < 15; i++) {
    arr.push(Math.round(Math.random() * 100));
  }

  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = arr[i];
    div1.appendChild(li);
  }

  div1.addEventListener("click", (event) => {
    div1.removeChild(event.target);
    newArr.push(event.target.textContent);
    div2.innerHTML = newArr;
  });
});
