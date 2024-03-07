// Создать функцию isMatch, которая проверяет, является ли 2 аргумент в виде
// массива подмножеством другого массива

// const isMatch = (arr1, arr2) => {
//   const arr = [];

//   for (let i = 0; i < arr2.length; i++) {
//     let temp = arr1.find((el) => el === arr2[i]);

//     if (temp !== undefined) arr.push(temp);
//   }

//   return arr.length === arr2.length;
// };

const isMatch = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) return false;
  }

  return true;
};

console.log(isMatch([1, 2, 3], [3, 2, 1]));
console.log(isMatch([1, 2, 3], [3, 4, 1]));
console.log(isMatch([1, 2, 3], [3]));
