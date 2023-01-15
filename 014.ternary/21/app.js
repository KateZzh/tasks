// Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста

const string = prompt("введите текст");

if (isNaN(string)) {
  console.log(string.split());
} else {
  console.log("ошибка");
}
