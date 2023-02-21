// . На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи

const n = 4;

function doArray(n_) {
  let arr = [];

  for (let i = 0; i < n_; i++) {
    arr.push(Math.round(Math.random() * 100));
  }
  return arr;
}

function isValid(array_) {
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array_[i])) throw new Error("в массиве есть буква");
  }
}

function main(array_) {
  try {
    isValid(array_);
    let newArr = [];

    for (let i = 0; i < array_.length; i++) {
      if (array_[i] > 10 && array_[i] < 100) newArr.push(array[i]);
    }
    return newArr;
  } catch (arror) {
    return arror.message;
  }
}

let array = doArray(n);
const res = main(array);
console.log(res);
