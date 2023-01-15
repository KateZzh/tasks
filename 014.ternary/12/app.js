// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6

const number = +prompt("введите трёхзначное число");

const fN = Math.floor(number / 100);
const sN = Math.floor((number % 100) / 10);
const thN = (number % 100) % 10;

console.log(`Сумма цифр: ${fN + sN + thN}`);
console.log(`Произведение цифр: ${fN * sN * thN}`);
