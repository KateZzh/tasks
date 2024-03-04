// Посчитать количество гласных букв (euiao) в строке. Решить через filter, reduce

// const countNumberVowelLetters = (str) => {
//   let newStr = str.toLowerCase().split('');

//   const res = newStr.filter((el) => 'euiao'.includes(el));

//   return res.length;
// };

const countNumberVowelLetters = (str) => {
  let newStr = str.toLowerCase().split('');

  const res = newStr.reduce((sum, el) => ('euiao'.includes(el) ? sum + 1 : sum), 0);

  return res;
};

console.log(countNumberVowelLetters('Have a great day ahead'));
