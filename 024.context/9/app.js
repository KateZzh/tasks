// На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

function doArray() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(prompt());
  }
  return arr;
}

function callArr(arr_) {
  const n = 10;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr_[i] > n) {
      newArr.push(arr_[i]);
    }
  }
  return newArr;
}

let arr = doArray();
let newArr = callArr(arr);
console.log(newArr);
