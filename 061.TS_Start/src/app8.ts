// Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.

let str: string = "asdfg";
let newStr: string = "";

for (let i = 0; i <= str.length; i += 2) {
  newStr += str[i] + " ";
}

console.log(newStr);
