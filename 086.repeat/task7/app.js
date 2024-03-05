// Необходимо написать функцию isUnique, которая проверяет, уникальны ли все
// символы в строке

// const isUnique = (str_) => {
//   let newStr = '';
//   const str = str_.toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     if (!newStr.includes(str[i])) {
//       newStr += str[i];
//     } else continue;

//     // !newStr.includes(str[i]) ? newStr += str[i] : newStr;
//   }

//   return str.length === newStr.length;
// };


// const isUnique = (str) => {
//   const obj = new Set(str.toLowerCase());

//   return obj.size === str.length;
// };

const isUnique = (str) => str.length === new Set(str.toLowerCase()).size;

console.log(isUnique('Hello!'));
console.log(isUnique('0123456789'));
console.log(isUnique('aA'));
