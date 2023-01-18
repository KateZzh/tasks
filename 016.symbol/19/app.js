// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4; Г – 2; Ц – 3; Т – 5

const str = prompt("введите строку из букв А, Г, Ц, Т").trim().toUpperCase();
let resultA = 0;
let resultG = 0;
let resultC = 0;
let resultT = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "А") {
    resultA += 1;
  }
  if (str[i] === "Г") {
    resultG += 1;
  }
  if (str[i] === "Ц") {
    resultC += 1;
  }
  if (str[i] === "Т") {
    resultT += 1;
  }
}

console.log(`А - ${resultA}; Г - ${resultG}; Ц - ${resultC}; Т - ${resultT}`);
