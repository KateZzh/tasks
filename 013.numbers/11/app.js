// Напишите программу, в которой вычисляется сумма, разность и произведение
// двух целых чисел, введенных с клавиатуры.

const firstNumber = +prompt("Введите первое число:");
const secondNumber = +prompt("Введите второе число:");

if (firstNumber % 1 === 0 && secondNumber % 1 === 0) {
  console.log(firstNumber + secondNumber);
  console.log(firstNumber - secondNumber);
  console.log(firstNumber * secondNumber);
} else {
  console.log("Некорректный ввод");
}
