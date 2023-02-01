// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

const n = 3;
let arr = [];
let sum = 0;

for (let i = 0; i < n; i++) {
  let pr = prompt();
  if (!isNaN(pr)) {
    arr.push(pr);
  }
}

// arr.forEach(function (el) {
//   sum += +el;
// });

// console.log(sum);

const result = arr.reduce(function (sum, el) {
  return sum + +el;
}, 0);

console.log(result);
