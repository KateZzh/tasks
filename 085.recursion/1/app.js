// Отобразите в строке через пробел числа от 0 до 10 по возрастанию используя рекурсию

// let str = '';
// let n = 0;

// function recursion() {
//   if (n > 10) return;

//   str += n + ' ';
//   n++;

//   recursion();
// }

// recursion();

// console.log(str);

let str = '';

function recursion(n) {
  if (n > 10) return;

  str += n + ' ';

  recursion(n + 1);
}

recursion(0);

console.log(str);
