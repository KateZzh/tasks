// Напишите программу, которая находит сумму всех чисел от 1 до 100 и выводит
// результат в консоль.
var count = 0;
for (var i_1 = 1; i_1 <= 100; i_1++) {
    count += i_1;
}
console.log(count);
function sum(n) {
    if (n === 1)
        return 1;
    return n + sum(n - 1);
}
alert(sum(100));
