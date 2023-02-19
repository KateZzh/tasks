// Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

const arr = ["by", "belarus", "de", "ru", "germany"];

function showResult(arr_) {
  let res = arr_.filter(function (el) {
    if (el.length <= 2) {
      return true;
    } else {
      return false;
    }
  });
  return res;
}

const result = showResult(arr);
console.log(result);
