// Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.
var str = "asdfg";
var newStr = "";
for (var i_1 = 0; i_1 <= str.length; i_1 += 2) {
    newStr += str[i_1] + " ";
}
console.log(newStr);
