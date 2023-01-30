// Дано предложение и количество раз которое его надо повторить. Напишите
// программу, которая повторяет данное предложение нужное количество раз.

const str = "abc";
const n = 3;
let newStr = "";

console.log(str.repeat(n));

// for (let i = 0; i<n; i++) {
// console.log(str);
// }

for (let i = 0; i < n; i++) {
  newStr += str;
}
console.log(newStr);
