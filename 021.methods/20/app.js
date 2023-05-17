// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter

const n = 5;
let arr = [];

for (let i = 0; i < n; i++) {
  let pr = prompt();
  arr.push(pr);
}

let result = arr.filter(function (el) {
  if (el >= 0) {
    return true;
  }
});
console.log(result);