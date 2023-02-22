// На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение

const num = 5;

function isValid(num_) {
  try {
    if (!isNaN(num_) && num_ % 2 !== 0) throw new Error("это число и оно не является четным");
    return num_;
  } catch (error) {
    return error.message;
  }
}

const result = isValid(num);
console.log(result);
