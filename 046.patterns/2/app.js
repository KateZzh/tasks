// Вы вводите числа в поле для ввода формируя массив.
// Необходимо отобразить массив, а также отдельно
// все четные элементы этого массива и нечетные

const arr = [];

document.querySelector("button").addEventListener("click", () => {
  const inp = document.querySelector("input");
  const array = document.querySelector(".arr");
  const even = document.querySelector(".even");
  const notEven = document.querySelector(".not_even");

  arr.push(inp.value);

  array.innerHTML = arr;

  const ev = [];
  const notEv = [];

  arr.forEach((el) => (el % 2 === 0 ? ev.push(el) : notEv.push(el)));

  even.innerHTML = ev;
  notEven.innerHTML = notEv;
});
