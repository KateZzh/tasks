// Пользователь вводит строку. Необходимо посчитать количество гласных

let str = prompt("введите строку").trim().toLowerCase().split("");
let count = 0;

for (i = 0; i < str.length; i++) {
  if (
    str[i] === "а" ||
    str[i] === "о" ||
    str[i] === "у" ||
    str[i] === "ы" ||
    str[i] === "э" ||
    str[i] === "е" ||
    str[i] === "ё" ||
    str[i] === "и" ||
    str[i] === "ю" ||
    str[i] === "я"
  ) {
    count += 1;
  }
}

console.log(`количество гласных в строке ${str.join("")}: ${count}`);
