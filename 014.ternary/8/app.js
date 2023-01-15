// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)

const monthNumber = +prompt("введите номер месяца");

if (3 <= monthNumber && monthNumber <= 5) {
  console.log("весна");
} else if (6 <= monthNumber && monthNumber <= 8) {
  console.log("лето");
} else if (9 <= monthNumber && monthNumber <= 11) {
  console.log("осень");
} else if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
  console.log("зима");
} else {
  console.log("Некорректный ввод");
}

switch (monthNumber) {
  case 1:
    console.log("зима");
    break;
  case 2:
    console.log("зима");
    break;
  case 3:
    console.log("весна");
    break;
  case 4:
    console.log("весна");
    break;
  case 5:
    console.log("весна");
    break;
  case 6:
    console.log("лето");
    break;
  case 7:
    console.log("лето");
    break;
  case 8:
    console.log("лето");
    break;
  case 9:
    console.log("осень");
    break;
  case 10:
    console.log("осень");
    break;
  case 11:
    console.log("осень");
    break;
  case 12:
    console.log("зима");
    break;

  default:
    console.log("Некорректный ввод");
    break;
}
