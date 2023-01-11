// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
//     же результат – число с плавающей точкой, то округлить до 2 знаков после запятой).

const number = +prompt("Введите число:");
const squareRootNumber = number ** (1 / 2);

console.log(+squareRootNumber.toFixed(2));
