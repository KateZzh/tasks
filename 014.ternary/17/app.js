// Пользователь вводит строку. Вывести первый символ строки (индексы)

const string = prompt("введите текст");

if (isNaN(string)) {
  console.log(string.slice(0, 1));
} else {
  console.log("ошибка");
}
