// Напишите программу для пересчёта величины временного интервала, заданного
// в минутах, в величину, выраженную в часах и минутах:
// Пример:
// 150 => 2 час 30 минут
// 50 => 0 час 50 минут
// 240 => 4 час 0 минут

const time = +prompt("Введите время (минуты):");

const hours = Math.floor(time / 60);
const minutes = time % 60;

console.log(`${hours} час ${minutes} минут`);

