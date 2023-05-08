// Пользователь вводит 6 значений и распределяет их поровну между 2 массивами.
// Cоздать новый массив, добавить туда значения всех массивов. Spread

const n = 6;
let arr1 = [];
let arr2 = [];

for (let i = 0; i < n; i++) {
  let pr = prompt();
  if (i < n / 2) {
    arr1.push(pr);
  } else arr2.push(pr);
}

let arr = [...arr1, ...arr2];
console.log(arr);