// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре

const string = prompt("введите текст");

if (isNaN(string)) {
  console.log(string.toUpperCase());
} else {
  console.log("ошибка");
}
