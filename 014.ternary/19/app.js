// Пользователь вводит строку. Необходимо повторить ее трижды

const string = prompt("введите текст");

if (isNaN(string)) {
  console.log(string.repeat(3));
} else {
  console.log("ошибка");
}
