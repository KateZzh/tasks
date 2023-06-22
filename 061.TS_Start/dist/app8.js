// Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.
let str = "asdfg";
let newStr = "";
for (let i = 0; i <= str.length; i += 2) {
    newStr += str[i] + " ";
}
console.log(newStr);
