// На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный треугольник.
// 4 –>****
// ***
// **
// *

const num18: number = 4;
let star: string = "*";

for (let i = num18; i > 0; i--) {
  console.log(star.repeat(i));
}
