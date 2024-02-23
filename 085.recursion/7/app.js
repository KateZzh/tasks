// Вычислите сумму массива чисел статичного массива используя рекурсию

const arr = [1, 2, 3, 4, 10];

function calculateSum(i) {
  if (i === arr.length) return 0;

  return arr[i] + calculateSum(i + 1);
}

console.log(calculateSum(0));
