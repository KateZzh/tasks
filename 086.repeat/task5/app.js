// Посчитать количество дубликатов вхождения каждого элемента в массиве.

const countNumberOfDuplicates = (arr) => {
  const obj = {};

  arr.forEach((el) => (!!obj[el] ? (obj[el] += 1) : (obj[el] = 1)));

  return obj;
};

console.log(countNumberOfDuplicates([1, 1, 2, 1, 3, 3, 4]));
