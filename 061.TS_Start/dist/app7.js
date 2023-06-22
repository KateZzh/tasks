// Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.
let fact = 1;
let youNum = +prompt();
for (let i = 1; i <= youNum; i++) {
    fact *= i;
}
console.log(fact);
function factorial(n) {
    if (n === 1)
        return 1;
    return n * factorial(n - 1);
}
alert(factorial(5));
