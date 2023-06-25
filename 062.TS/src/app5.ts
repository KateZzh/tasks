// Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.

const arrNum5: number[] = [1, 2, 3, 4];

const filteredArr5: number[] = arrNum5.filter(
  (el) => el % 3 === 0 && el % 2 !== 0
);

console.log(filteredArr5);
