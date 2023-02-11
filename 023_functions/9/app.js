// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удвоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами

const arr = [1, 2, 3, 4, 5];

function isValid(arr_) {
  const bool = arr_.every((el) => (typeof el === "number" ? true : false));
  return bool;
}

function doubledValues(arr_) {
  const bool = isValid(arr_);
  if (bool === true) {
    const result = arr_.map(function (el) {
      return el * 2;
    });
    return result;
  } else {
    return "arror";
  }
}

const result = doubledValues(arr);
console.log(result);
