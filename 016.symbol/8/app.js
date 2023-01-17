// Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false

const str = "мем".trim().toLowerCase();
const reverseStr = str.split("").reverse().join("");

if (str === reverseStr) {
  console.log(true);
} else console.log(false);
