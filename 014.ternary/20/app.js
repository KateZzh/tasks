// .Ввести строку. Проверить является ли это число или текст. Если число, то
// выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
// противном случае false

const string = prompt("введите строку");

if (isNaN(string)) {
  if (string === "hschool") {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  if (string % 2 === 0) {
    console.log(`${string} - четное`);
  } else {
    console.log(`${string} - нечетное`);
  }
}
