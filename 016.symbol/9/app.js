// На вход программе подается строка текста содержащая “@”. Напишите
// программу, которая удаляет все вхождения символа “@”. Добавить проверки
// 123@1@@34 -> 123134

let str = "123@1@@34".trim();
let count = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] != "@") {
    count += str[i];
  }
}
console.log(count);
