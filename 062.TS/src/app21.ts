// Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

const str21: string[] = "Hello world! Hi!".split(" ");
let temp21: string = str21[0];

for (let i = 1; i < str21.length; i++) {
  if (str21[i].length > temp21.length) temp21 = str21[i];
}

console.log(temp21);
