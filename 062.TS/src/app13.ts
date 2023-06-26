// На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

const n13: number = 4;
let arrNum13: number[] = [];

for (let i = 0; i < n13; i++) {
  let pr: string = prompt();
  if (!isNaN(+pr)) arrNum13.push(+pr);
}

const res13: string[] = arrNum13.map((el) => (el % 2 === 0 ? "чет" : "нечет"));

console.log(res13);
