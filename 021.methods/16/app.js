// . *На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить проверки на ввод числа (значение
// n не должно быть больше длины массива, 0, пустая строка, строковый тип данных).
// Использовать любой цикл / метод перебора массива
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]

const arr = [1, 2, 3, 4, 5, 6];
const num = prompt("введите число");

let resultFull = [];
let item = [];

for (let i = 0; i < arr.length; i++) {
  if (!isNaN(num) && num <= arr.length && num != 0 && num != "") {
    item.push(arr[i]);
    if (item.length == num) {
      resultFull.push(item);
      item = [];
    } else if (arr[i] == arr.length) {
      resultFull.push(item);
    }
  } else console.log("Error");
}

console.log(resultFull);