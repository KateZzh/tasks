// На входе массив array. Посчитайте количество элементов массива используя рекурсию

// const array = [1, 'aa', 3, '', 5];
// let count = 0;

// function recursion() {
//   if (array.length === 0) return;

//   count++;
//   array.pop();

//   recursion();
// }

// recursion();

// console.log(count);

const array = [1, 'aa', 3, ''];

function recursion(n) {
  if (array.length === 0) return n;

  array.pop();

  return recursion(n + 1);
}

console.log(recursion(0));
