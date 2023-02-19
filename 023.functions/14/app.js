// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

const arr = [1, 2, 3, 4];
function isValid(arr_) {
  const bool = arr_.every((el) => (!isNaN(el) ? true : false));
  return bool;
}

function searchMax(arr_) {
  //   const max = Math.max(...arr_);
  //   return max;
  const bool = isValid(arr_);
  if (bool === true) {
    let index = arr_[0];
    for (let i = 0; i < arr_.length; i++) {
      if (index < arr_[i]) {
        index = arr_[i];
      }
    }
    return index;
  } else {
    return "arror";
  }
}

const res = searchMax(arr);
console.log(res);
