// Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если значения
// массива не соответствуют условию задания, вывести сообщение об ошибке.

const arr = [-2, 1, 3, 4];

function isValid(arr_) {
  const bool = arr_.every((el) => (typeof el === "number" ? true : false));
  return bool;
}

function searchMinAndMax(arr_) {
  const bool = isValid(arr_);
  let maxNumber = 0;
  let minNumber = arr_[0];

  if (bool === true) {
    for (let i = 0; i < arr_.length; i++) {
      if (arr_[i] > maxNumber) {
        maxNumber = arr_[i];
      } else if (arr_[i] < minNumber) {
        minNumber = arr_[i];
      }
    }
    return `min = ${minNumber}, max = ${maxNumber}`;
  } else return "error";
}

const result = searchMinAndMax(arr);
console.log(result);
