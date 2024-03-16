// Создать функцию findPairsWithSum, которая принимает два аргумента:
// массив из уникальных целых чисел и сумму в виде целого числа.
// Если сумма двух любых чисел массива из аргумента равна числу, которое
// приходит вторым аргументом, функция должна вернуть новый массив из этих
// двух чисел в любом порядке.
// Если решения нет, вернуть пустой массив

// const findPairsWithSum = (arr, sum) => {
//   let res = [];
//   const newArr = [...arr];

//   for (let j = 0; j < arr.length; j++) {
//     for (let i = 1; i < newArr.length; i++) {
//       if (newArr[i] + arr[j] === sum) {
//         res.push(newArr[i]);
//         break;
//       }
//     }

//     newArr.shift(newArr[0]);

//     if (res.length !== 0) {
//       res.push(arr[j]);
//       break;
//     }
//   }

//   return res;
// };

const findPairsWithSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    const numFirst = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      const numSecond = arr[j];

      if (numFirst + numSecond === sum) return [numFirst, numSecond];
    }
  }

  return [];
};

console.log(findPairsWithSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(findPairsWithSum([3, 5, -4, 8, 11, 1, -1, 6], 100));
