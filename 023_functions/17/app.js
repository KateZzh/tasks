// Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

const str = "hschool";

// function alternRegStr(str_) {
//   const arr = str_.split("");
//   let res = "";
//   for (let i = 0; i < arr.length; i++) {
//     i % 2 === 0 ? (res += arr[i].toUpperCase()) : (res += arr[i]);
//   }
//   return res;
// }

// const result = alternRegStr(str);
// console.log(result);

const doAlternRegStr = (str_) => {
  const arr = str_.split("");
  let res = "";

  for (let i = 0; i < arr.length; i++) {
    i % 2 === 0 ? (res += arr[i].toUpperCase()) : (res += arr[i]);
  }
  return res;
};

console.log(doAlternRegStr(str));
