// Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of

const arr = [2, 5, 9, 15, 0, 4];
let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 == 0) {
//     console.log(arr[i]);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 == 0) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

for (let i of arr) {
  if (i % 3 == 0) {
    newArr.push(i);
  }
}
console.log(newArr);
