// На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию

// let res = 1;

// function recursion(n, step) {
//   if (step === 0) return;

//   res *= n;

//   recursion(n, step - 1);
// }

// recursion(2, 5);

// console.log(res);

// function recursion(n, step) {
//   if (step === 0) return 1;

//   return n * recursion(n, step - 1);
// }

// console.log(recursion(2, 5));

function recursion(n, step) {
  if (step === 1) return n;

  return n * recursion(n, step - 1);
}

console.log(recursion(2, 5));
