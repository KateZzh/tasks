// Напишите программу, которая определяет, является ли заданная строка
// анаграммой (состоит из тех же символов, но в другом порядке) другой строки.

let str11a: string = "rewg ".trim();
let str11b: string = "  gewr".trim();

console.log(
  str11a.split("").sort().join("") === str11b.split("").sort().join("")
    ? "является анаграммой"
    : "не является анаграммой"
);
