// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua

const str = prompt("введите строку").trim().toLowerCase();

let result = "";

for (let i = 0; i < str.length; i++) {
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u" ||
    str[i] === "y"
  ) {
    result += str[i];
  }
}

console.log(result);
