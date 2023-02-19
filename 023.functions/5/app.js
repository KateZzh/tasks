// На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

const arr = [1, 5, 10, 101, 250, "f"];

function showRes(arr_) {
  let countWord = 0;
  for (let i = 0; i < arr_.length; i++) {
    if (!isNaN(arr_[i])) {
      continue;
    } else {
      countWord++;
    }
  }

  if (countWord > 0) {
    return false;
  } else return true;
}

let result = showRes(arr);
console.log(result);
