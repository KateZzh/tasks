// Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt.

const n = 3;
let arr = [];

for (let i = 0; i < n; i++) {
  let pr = prompt();
  arr.push(pr);
}
console.log(arr);
