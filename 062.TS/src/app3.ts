// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива

const n3: number = 4;
const arr3: number[] = [];

for (let i = 0; i < n3; i++) {
  let pr: string = prompt();

  if (!isNaN(+pr)) arr3.push(+pr);
}

const sumArr3: number = arr3.reduce((sum, el) => sum + el, 0);

console.log(sumArr3);
