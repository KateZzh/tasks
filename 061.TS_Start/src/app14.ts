// Напишите программу, которая находит и выводит наиболее длинное слово в
// заданной строке.

let str14: string[] = "Hifffff Hello Hey".split(" ");
let temp: string = "";

for (let i = 0; i < str14.length; i++) {
  if (str14[i].length > temp.length) {
    temp = str14[i];
  }
}

console.log(temp);
