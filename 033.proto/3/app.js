// . По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение – текущее итерируемое значение
// массива
// [11, 2, 13] – {
// 0: 11,
// 1: 2,
// 2: 13
// }

const btn = document.querySelector("button");
let arr = [];

function isValid(inp) {
  if (inp.value.trim() === "") throw new Error("empty");
  if (isNaN(inp.value)) throw new Error("not number");
}

btn.addEventListener("click", function () {
  try {
    const inp = document.querySelector("input");
    const array = document.querySelector(".array");
    const object = document.querySelector(".object");

    isValid(inp);

    arr.push(inp.value);
    array.innerHTML = arr;

    const obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[i] = arr[i];
    }
    object.innerHTML = JSON.stringify(obj);

    inp.value = "";
  } catch (error) {
    alert(error.message);
  }
});
