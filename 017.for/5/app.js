// Найдите максимальное значение в статичном массиве используя цикл.

let arr = [1, -2, 5, 66, 12, -55];
let max = arr[0];

for (i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
