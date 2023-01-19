// Найдите минимальное значение в массиве используя цикл

const arr = [2, 50, -6, 20];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(min);
