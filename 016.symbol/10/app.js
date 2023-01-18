// Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых.

const number = prompt("введите число");
const sqrtNumber = Math.sqrt(number);

if (!isNaN(number)) {
  console.log(Math.round(sqrtNumber));
  console.log(sqrtNumber.toFixed(1));
  console.log(sqrtNumber.toFixed(2));
} else console.log("ошибка");

console.log(Math.round(Math.sqrt(number)));
console.log(Math.sqrt(number).toFixed(1)); //string
console.log(Math.sqrt(number).toFixed(2)); //string
