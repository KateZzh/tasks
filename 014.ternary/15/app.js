// Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в
// результате получилось выражение: “I’m хх". Проверки на ввод только чисел.
// Проверки на ввод чисел до 10. Если первое число – 0, то опустить его

let firstNumber = prompt("введите первое число (от 0 до 10):");
let secondNumber = prompt("введите второе число (от 0 до 10):");

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("ошибка");
} else if (
  0 <= firstNumber &&
  firstNumber <= 10 &&
  0 <= secondNumber &&
  secondNumber <= 10
) {
  if (firstNumber == 0) {
    console.log(`I'm ${secondNumber}`);
  } else {
    console.log(`I'm ${+firstNumber + +secondNumber}`);
  }
} else {
  console.log("Вы не прошли проверку на ввод чисел от 0 до 10");
}
