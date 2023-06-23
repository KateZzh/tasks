// Напишите программу, которая принимает строку и возвращает новую строку, в
// которой все символы уникальны (не повторяются). Например, для строки "hello"
// результатом должна быть строка "helo".

const str10: string = "hhello!";
let res10: string = "";

for (let i = 0; i < str10.length; i++) {
  if (!res10.endsWith(str10[i])) res10 += str10[i];
}

console.log(res10);
