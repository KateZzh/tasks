// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ["a", "b", "c", " ", "5"];

function checkArrStr(arr_) {
  const bool = arr_.every((el) => (typeof el == "string" ? true : false));
  return bool;
}

function sumArrStr(arr_) {
  let newArr = "";
  for (let i = 0; i < arr_.length; i++) {
    const bool = checkArrStr(arr_);
    if (bool === true) {
      newArr += arr_[i];
    } else {
      console.log("error");
      break;
    }
  }
  return newArr;
}

const result = sumArrStr(arr);
console.log(result);
