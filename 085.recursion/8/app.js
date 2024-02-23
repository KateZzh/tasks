// Реализуйте поиск максимального числа статичного массива используя рекурсию

const arr = [1, 12, 30, 4, -100];
let maxNum = 0;

function findMax(i) {
  if (i === arr.length) return maxNum;

  if (arr[i] > maxNum) maxNum = arr[i];

  return findMax(i + 1);
}

console.log(findMax(0));
