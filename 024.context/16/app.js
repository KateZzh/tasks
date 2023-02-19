// Вычислите сумму массива чисел статичного массива используя рекурсию

const arr = [1, 2, 3, 4];

// function doSumArr(arr_) {
//   if (arr_.length === 1) {
//     return arr_[0];
//   } else {
//     return arr_[0] + doSumArr(arr_.slice(1));
//   }
//   return doSumArr(arr_.slice(1).push(sum));
// }

function doSumArr(arr_) {
  return arr_.length === 1 ? arr_[0] : arr_[0] + doSumArr(arr_.slice(1));
}

const sumArr = doSumArr(arr);
console.log(sumArr);
