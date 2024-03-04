// Сумма кратных 10 чисел массива. Решить через for, for of, while, do while, forEach,
// reduce

// const findSumSelectedNum = (arr) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 10 === 0) sum += arr[i];
//   }

//   return sum;
// };

// const findSumSelectedNum = (arr) => {
//   let sum = 0;

//   for (let el of arr) {
//     if (el % 10 === 0) sum += el;
//   }

//   return sum;
// };

// const findSumSelectedNum = (arr) => {
//   let sum = 0;
//   let i = 0;

//   while (i < arr.length) {
//     if (arr[i] % 10 === 0) sum += arr[i];

//     i++;
//   }

//   return sum;
// };

// const findSumSelectedNum = (arr) => {
//   let sum = 0;
//   let i = 0;

//   do {
//     if (arr[i] % 10 === 0) sum += arr[i];

//     i++;
//   } while (i < arr.length);

//   return sum;
// };

// const findSumSelectedNum = (arr) => {
//   let sum = 0;

//   arr.forEach((el) => (el % 10 === 0 ? (sum += el) : sum));

//   return sum;
// };

const findSumSelectedNum = (arr) => arr.reduce((sum, el) => (el % 10 === 0 ? (sum += el) : sum), 0);

console.log(findSumSelectedNum([1, 10, 25, 20, 3, 50, 20]));
