// Напишите функцию fibonacci, которая будет генерировать последовательность
// Фибоначчи длины n, которую передали в качестве аргумента

const fibonacci = (n) => {
  const arr = [];

  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
};

console.log(fibonacci(5));
