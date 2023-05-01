// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

const n = 3;
let arr = [];

for (let i = 0; i < n; i++) {
  let pr = prompt();
  arr.push(pr);
}

// arr.forEach(function (el) {
//   if (!isNaN(el)) {
//     console.log(true);
//   } else console.log(false);
// });

// let res = 0;
// arr.forEach(function (el) {
//   if (!isNaN(el)) {
//     res++;
//   }
// });

// if (res == n) {
//   console.log(true);
// } else console.log(false);

const result = arr.every(function (el) {
  if (!isNaN(el) && el !== '') {
    return true;
  } else {
    return false;
  }
});

console.log(result);