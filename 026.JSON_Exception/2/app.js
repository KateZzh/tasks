// На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение.

const arr = [1, "gf", 2, 3];

function isValid(arr_) {
  try {
    for (let i = 0; i < arr_.length; i++) {
      if (isNaN(arr_[i])) throw new Error("есть строка");
    }
    return true;
  } catch (error) {
    return error.message;
  }
}

const res = isValid(arr);
console.log(res);
