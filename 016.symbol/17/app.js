// На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого),
// преобразовать в верхний регистр

// const str = prompt("введите строку").trim().toUpperCase();
// let result = "";
// let arrStr = str.split("_");

// for (let i = 0; i < arrStr.length; i++) {
//   result += arrStr[i].slice(1);
// }

// console.log((str[0] + result).trim());

const str = prompt("введите строку").trim().split("_");
let result = "";

console.log(str);

for (let i = 1; i < str.length - 1; i++) {
  result += str[i][0].toUpperCase() + str[i].slice(1);
}

console.log(str[0] + result);
