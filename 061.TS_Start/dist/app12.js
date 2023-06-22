// Создайте переменную str и присвойте ей строковое значение. Используя метод
// charAt и цикл for, выведите каждый символ строки и его индекс на отдельной
// строке.
const str12 = "Hello!";
for (let i = 0; i < str12.length; i++) {
    console.log(`символ: ${str12[i]}, индекс: ${i}`);
}
console.log("---------");
for (let i = 0; i < str12.length; i++) {
    console.log(`символ: ${str12.charAt(i)}, индекс: ${i}`);
}
