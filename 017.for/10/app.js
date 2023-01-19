// Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами

const str1 = "pila".trim().toLowerCase().split("");
const str2 = "lipa".trim().toLowerCase().split("");

if (str1.sort().join("") === str2.sort().join("")) {
  console.log(true);
} else console.log(false);
