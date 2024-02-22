// Отобразите в строке через пробел четные числа от 5 до 0 по убыванию используя рекурсию

// let str = '';
// let n = 5;

// function recursion() {
//   if (n === -1) return;

//   if (n % 2 === 0) str += n + ' ';

//   n--;

//   recursion();
// }

// recursion();

// console.log(str);

let str = '';

function recursion(n) {
  if (n === -1) return;

  if (n % 2 === 0) str += n + ' ';

  recursion(n - 1);
}

recursion(5);

console.log(str);
