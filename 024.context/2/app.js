// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

const n = 3;

function isValid(arr_) {
  const bool = arr_.every((el) => (isNaN(el) ? true : false));
  return bool;
}

function doArray(n_) {
  let arr = [];
  for (let i = 0; i < n_; i++) {
    arr.push(prompt());
  }
  return arr;
}

function findMax(arr_) {
  let maxLength = 0;
  let value = "";
  const bool = isValid(arr);
  if (bool === true) {
    for (let i = 0; i < arr_.length; i++) {
      if (arr_[i].length > maxLength) {
        maxLength = arr_[i].length;
        value = arr_[i];
      }
    }
    return value;
  } else {
    return "error";
  }
}

const arr = doArray(n);
const res = findMax(arr);
console.log(res);
