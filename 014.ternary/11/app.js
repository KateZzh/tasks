// Напишите программу, которая находит полное число метров по заданному числу
// сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1

const cmNumber = prompt("введите число сантиметров");

if (isNaN(cmNumber)) {
  console.log("ошибка");
} else {
  console.log(`Полное число метров: ${Math.floor(cmNumber / 100)}`);
}
