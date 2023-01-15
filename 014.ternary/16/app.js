// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести длину строки

const string = prompt("введите текст");

if (isNaN(string)) {
  console.log(string.length);
} else {
  console.log("ошибка");
}
