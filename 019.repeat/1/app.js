// Реализовать строку, в которую 5 раз будет конкатенироваться новое значение
// prompt

const num = 5;
let str = "";

for (let i = 0; i < num; i++) {
  str += prompt();
}

console.log(str);
