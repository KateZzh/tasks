// На вход программе подается строка текста, состоящая из слов, разделенных
// ровно одним пробелом. Напишите программу, которая подсчитывает количество
// слов в ней

let str = prompt("введите текст").trim().split(" ");
let count = 0;

console.log(str.length);

for (i = 0; i < str.length; i++) {
  count += 1;
}
console.log(`количество слов в строке: ${count}`);