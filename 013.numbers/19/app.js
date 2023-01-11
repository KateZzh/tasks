// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения ax^2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.

const a = +prompt("Введите число a:");
const b = +prompt("Введите число b:");
const c = +prompt("Введите число c:");
const discriminant = b ** 2 - 4 * a * c;

if (discriminant < 0) {
  console.log("корней нет");
} else if (discriminant === 0) {
  const x = -b / (2 * a);
  console.log(x);
} else {
  const x1 = (-b + discriminant ** (1 / 2)) / (2 * a);
  const x2 = (-b - discriminant ** (1 / 2)) / (2 * a);
  if (x2 > x1) {
    console.log(x1, x2);
  } else {
    console.log(x2, x1);
  }
}
