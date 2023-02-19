// Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

const name = prompt("введите имя");
const surname = prompt("введите фамилию");

function showResult(name_, surname_) {
  return `Привет, ${name_} ${surname_}`;
}
let result = showResult(name, surname);

console.log(result);
