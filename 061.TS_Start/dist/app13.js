// Создайте переменную str и присвойте ей строковое значение. Используя метод
// replace и цикл while, замените все гласные символы в строке на символ *.
var str13 = "asdfiisa";
var term13 = "";
var i = 0;
while (i < str13.length) {
    term13 += /[AaEeIiOoUu]+/gm.test(str13[i]) ? "*" : str13[i];
    i++;
}
console.log(term13);
