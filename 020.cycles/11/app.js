// У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

const arr = ["1", "5", "a", "3", "d", "-"];
let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!isNaN(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// let i = 0;
// while (i < arr.length) {
//   if (!isNaN(arr[i])) {
//     newArr.push(arr[i]);
//   }
//   i++;
// }
// console.log(newArr);

// let i = 0;
// do {
//   if (!isNaN(arr[i])) {
//     newArr.push(arr[i]);
//   }
//   i++;
// } while (i < arr.length);
// console.log(newArr);

for (let el of arr) {
  if (!isNaN(el)) {
    newArr.push(el);
  }
}
console.log(newArr);
