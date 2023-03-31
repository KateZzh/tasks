// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из отфильтрованных значений, где строка начинается на [a, h].
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const n = 4;

function doArray(n_) {
  let arr = [];

  for (let i = 0; i < n_; i++) {
    arr.push(prompt("введите значение"));
  }

  return arr;
}

function doFilterArray(arr_) {
  try {
    const filtered = arr_.filter((el) => el[0] === "a" || el[0] === "h");
    return filtered;
  } catch (error) {
    return error.message;
  }
}

const filteredArray = doFilterArray(doArray(n));
console.log(filteredArray);
