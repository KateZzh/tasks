// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map

const n = 5;
let arr = [];

for (let i = 0; i < n; i++) {
  let pr = prompt();
  if (!isNaN(pr)) {
    arr.push(pr);
  }
}

// const result = arr.map(function (el) {
//   return el ** 2;
// });
// console.log(result);

// let res = [];
// arr.forEach(function (el) {
//   res.push(el ** 2);
// });
// console.log(res);

// let res = [];
// for (let i = 0; i < n; i++) {
//   res.push(arr[i] ** 2);
// }
// console.log(res);

let res = [];
let i = 0;
while (i < arr.length) {
  res.push(arr[i] ** 2);
  i++;
}
console.log(res);
