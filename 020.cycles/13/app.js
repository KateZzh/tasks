// Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of

const arr = [-1, 2, 5, -10, 3, -11, 0];
let res = 0;

for (let el of arr) {
  if (el >= 0) {
    res += el;
  }
}
console.log(res);
