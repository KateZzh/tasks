// На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false

const str = prompt("введите имя и фамилию").trim();

if (isNaN(str)) {
  let a = str.split(" ");

  if (a[0][0] === a[0][0].toUpperCase() && a[1][0] === a[1][0].toUpperCase()) {
    console.log(str, true);
  } else console.log(str, false);
} else console.log("Ошибка");
