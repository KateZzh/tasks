// Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d“

const str17: string = "Hello World";
const newStr17: string[] = str17.split(" ");
let res17: string = "";

for (let i = 0; i < newStr17.length; i++) {
  res17 += newStr17[i].slice(newStr17[i].length - 1) + " ";
}

console.log(res17);
