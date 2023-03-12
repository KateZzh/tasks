// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

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
    const uniq = document.querySelector(".uniq");

    isValid(inp);

    arr.push(inp.value);
    array.innerHTML = arr;

    let uniqArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqArr.includes(arr[i])) {
        uniqArr.push(arr[i]);
      }
    }
    uniq.innerHTML = uniqArr;

    inp.value = "";
  } catch (error) {
    alert(error.message);
  }
});
