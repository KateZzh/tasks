// Дан статичный массив элементов. С помощью цикла for найдите произведение
// всех элементов массива

arr = [1, 2, 3, 4];
result = 1;

for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}

console.log(result);
