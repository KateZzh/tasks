// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
// же результат – число с плавающей точкой, то округлить то целых)

const number = +prompt("Введите число:");
const squareRootNumber = number ** (1 / 2);

console.log(Math.round(squareRootNumber));
