// Complete the solution so that the function will break up camel casing, using a space between words.
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// function solution(string) {
//   let res = [];

//   for (let i = 0; i < string.split('').length; i++) {
//     /[A-Z]/.test(string[i]) ? res.push(' ' + string[i]) : res.push(string[i]);
//   }

//   return res.join('');
// }

// const solution = (string) => {
//   let res = [];

//   string.split('').forEach((el) => (/[A-Z]/.test(el) ? res.push(' ' + el) : res.push(el)));

//   return res.join('');
// };

// const solution = (string) => (string ? string.split('').reduce((res, el) => (/[A-Z]/.test(el) ? res + ' ' + el : res + el), []) : '');

// const solution = (string) => string.replace(/([A-Z])/g, ' $1');

// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));
// }

const solution = (string) => string.replace(/([A-Z])/g, ' $1');

console.log(solution('camelCasingTest'));
console.log(solution(''));
