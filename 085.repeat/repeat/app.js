// ---------1---------

// const findSumEvenNum = (arr) => arr.reduce((sum, el) => (el % 2 === 0 ? sum + el : sum + 0), 0);

// console.log(findSumEvenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ---------2---------

// const findSumEvenNumBeforeRestriction = (arr, sum) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       while (sum + arr[i] <= 10) {
//         sum += arr[i];
//         break;
//       }
//     }
//   }

//   return sum;
// };

// const findSumEvenNumBeforeRestriction = (arr, sum) => {
//   arr.forEach((el) => {
//     if (el % 2 === 0) {
//       while (sum + el <= 10) {
//         sum += el;
//         break;
//       }
//     }
//   });

//   return sum;
// };

// console.log(findSumEvenNumBeforeRestriction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));

// ---------3---------

const findSumEvenNum = (arr, res) => {
  if (arr.length === 0) return res;
  if (arr[0] % 2 === 0) res *= arr[0];

  arr.shift();

  return findSumEvenNum(arr, res);
};

console.log(findSumEvenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
