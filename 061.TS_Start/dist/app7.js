// Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.
var fact = 1;
var youNum = +prompt();
for (var i_1 = 1; i_1 <= youNum; i_1++) {
    fact *= i_1;
}
console.log(fact);
function factorial(n) {
    if (n === 1)
        return 1;
    return n * factorial(n - 1);
}
alert(factorial(5));
