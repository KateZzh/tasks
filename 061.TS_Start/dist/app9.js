// Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке
const str9 = "hello world";
let count9 = 0;
let symbol = "";
let tempCount9 = 0;
let tempSymbol = "";
const newStr9 = str9.split("").sort().join("");
for (let i = 0; i < newStr9.length; i++) {
    if (!tempSymbol.endsWith(newStr9[i])) {
        if (tempCount9 > count9) {
            count9 = tempCount9;
            symbol = tempSymbol;
        }
        tempSymbol = newStr9[i];
        tempCount9 = 1;
    }
    else {
        tempCount9++;
    }
}
console.log(`символ ${symbol} - количество ${count9}`);
