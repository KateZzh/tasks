// Создайте переменную str и присвойте ей строковое значение. Используя метод
// replace и цикл while, замените все гласные символы в строке на символ *.
const str13 = "asdfiisa";
let temp13 = "";
let i = 0;
while (i < str13.length) {
    temp13 += /[AaEeIiOoUu]+/gm.test(str13[i]) ? "*" : str13[i];
    i++;
}
console.log(temp13);
