// Напишите функцию, принимающую массив в качестве параметра. Необходимо
// оставить в массиве символы без дубликатов. IIFE
// [1, 1, 2, 2, 2, 3, 4, 5, 5, 5] = [1, 2, 3, 4, 5]

const arr = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 1, 1];

(function (arr_) {
  let newArr = [];
  let posDubl = [];

  for (let i = 0; i < arr_.length; i++) {
    if (arr_[i] !== posDubl) {
      newArr.push(arr_[i]);
      posDubl = arr_[i];
    }
  }
  console.log(newArr);
})(arr);

