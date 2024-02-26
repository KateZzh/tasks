// На входе число n = 5. Вычислите сумму натуральных чисел от 1 до n используя рекурсию

function recursion(n) {
  if (n === 1) return 1;

  return n + recursion(n - 1);
}

console.log(recursion(5));
