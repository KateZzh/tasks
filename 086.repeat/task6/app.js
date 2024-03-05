// Перевернуть входную строку. Решить задачу несколькими алгоритмами.

const reverseInputString = (str) => str.split('').reverse().join('');

// const reverseInputString = (str) => {
//   let revStr = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }

//   return revStr;
// };


// const reverseInputString = (str) => {
//   const arr = str.split('');
//   const newArr = [];

//   arr.forEach((el) => newArr.unshift(el));

//   return newArr.join('');
// };

console.log(reverseInputString('Hello!'));
