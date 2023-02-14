// На входе число n. Напишите функцию, которая переворачивает число.

const n = "51";

function doReversNum(n_) {
  const strNum = n_.split("").reverse().join("");
  return strNum;
}
const res = doReversNum(n);
console.log(res);
