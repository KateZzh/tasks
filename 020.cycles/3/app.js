// Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
// элементов этого массива.

const arr = [2, 3, 4, 5];
let res = 1;

// for (let i = 0; i < arr.length; i++) {
//   res *= arr[i];
// }
// console.log(res);

// let i = 0;
// while (i < arr.length) {
//   res *= arr[i];
//   i++;
// }
// console.log(res);

// let i = 0;
// do {
//   res *= arr[i];
//   i++;
// } while (i < arr.length);
// console.log(res);

for (let i of arr) {
  res *= i;
}
console.log(res);
