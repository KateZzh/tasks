// На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму.
// 12345 = 1^0+2^1+3^2+4^3+5^4

const str = "12345";

function doSumStr(str_) {
  try {
    let sum = 0;
    if (!str_) throw new Error("empty");

    for (let i = 0; i < str_.length; i++) {
      sum += str_[i] ** i;
    }
    return sum;
  } catch (error) {
    return error.message;
  }
}

const sumStr = doSumStr(str);
console.log(sumStr);
