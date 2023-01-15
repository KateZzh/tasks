// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы

let string = prompt("введите строку");

if (isNaN(string)) {
  if (string.trim() === "hschool") {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("ошибка");
}
