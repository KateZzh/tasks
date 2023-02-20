// Пользователь вводит n – порядковый номер числа из ряда Фибоначчи.
// Реализуйте функцию на поиск числа n в данной последовательности используя
// рекурсию
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, …
// 5 -> 5
// 10 -> 55
// 7 -> 13

const n = 3;

function getFibonacci(n_) {
  if (n_ === 0) return 0;
  if (n_ === 1) return 1;
  if (n_ > 1) return getFibonacci(n_ - 1) + getFibonacci(n_ - 2);
}

const numFibonacci = getFibonacci(n);
console.log(numFibonacci);