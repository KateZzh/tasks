// Реализовать строку, в которую 5 раз будет конкатенироваться новое значение
// prompt (где значение число)

const num = 5;
let res = "";

for (let i = 0; i < num; i++) {
  let newValue = prompt();
  if (!isNaN(newValue)) {
    res += newValue;
  }
} 

console.log(res);

