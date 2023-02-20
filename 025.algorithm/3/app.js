// Вычислите сумму массива целых чисел статичного массива используя рекурсию

const arr = [1, 2, 3, 4, 5];

function isValid(arr_) {
  const bool = arr_.every((el) => (!Number.isInteger(el) ? false : true));
  return bool;
}

// function findSumArr(arr_) {
//   if (bool === true) {
//     if (arr_.length === 1) return arr_[0];
//     return arr_[0] + findSumArr(arr_.slice(1));
//   } else return "введите только целые числа";
// }

function findSumArr(arr_) {
  if (bool === true) {
    return (arr_.length === 1) ? arr_[0] : arr_[0] + findSumArr(arr_.slice(1));
  } else return "введите только целые числа";
}

const bool = isValid(arr);
const getSumArr = findSumArr(arr);
console.log(getSumArr);
