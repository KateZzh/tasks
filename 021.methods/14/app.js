// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = 4;
let arr = [];
let arr2 = [];

for (let i = 0; i < n; i++) {
  let pr = prompt();
  arr.push(pr);
}

// arr.forEach(function (el) {
//   arr2.push("#" + el);
// });
// console.log(arr2);

// let result = arr.map(function (el) {
//   return "#" + el;
// });
// console.log(result);

// for (let i = 0; i < n; i++) {
//   arr2.push("#" + arr[i]);
// }
// console.log(arr2);

let i = 0;
while (i < n) {
  arr2.push("#" + arr[i]);
  i++;
}
console.log(arr2);
