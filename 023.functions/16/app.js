// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для формирования
// массива из всех четных чисел, возведенных в квадрат. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив из всех
// четных чисел, возведенных в квадрат

const num = 4;

function isValid(arr_) {
  const bool = arr_.every((el) => (!isNaN(el) ? true : false));
  return bool;
}

function doArr(num_) {
  let arr = [];
  for (let i = 0; i < num_; i++) {
    let pr = prompt("введите число");
    arr.push(pr);
  }
  return arr;
}

function doArrEvenNumSquar(arr_) {
  const bool = isValid(arr_);
  if (bool === true) {
    let newArr = [];
    for (let i = 0; i < arr_.length; i++) {
      if (arr_[i] % 2 === 0) {
        newArr.push(arr_[i] ** 2);
      }
    }
    return newArr;
  } else {
    return "error";
  }
}

const arr = doArr(num);
const result = doArrEvenNumSquar(arr);
console.log(result);
