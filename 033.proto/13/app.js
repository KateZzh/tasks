// Напишите алгоритм для нахождения факториала числа

function findFactorial(n) {
  if (n <= 1) return 1;
  return n * findFactorial(n - 1);
}

const factorialNum = findFactorial(5);
console.log(factorialNum);
