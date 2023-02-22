// Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9
// 2 === 81, 1
// 2=== 1)

const num = 9119;

function doEveryNumPow(num_) {
  try {

    if (isNaN(num_)) throw new Error("not number");

    const strNum_ = String(num_);
    let strNewNum = "";

    for (let i = 0; i < strNum_.length; i++) {
      strNewNum += strNum_[i] ** 2;
    }
    return strNewNum;

  } catch (error) {
    return error.message;
  }
}

const newNum = doEveryNumPow(num);
console.log(newNum);
