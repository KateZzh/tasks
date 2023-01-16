// Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.

const date = prompt("введите дату в формате xxxx-xx-xx").trim().toLowerCase();

console.log(date.replaceAll("-", ".").split(".").reverse().join(".") + ".");
