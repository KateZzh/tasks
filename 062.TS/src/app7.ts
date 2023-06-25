// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел.

const n: number = 5;
const arrNum7: number[] = [];

for (let i = 0; i < n; i++) {
  let pr: string = prompt();

  if (!isNaN(+pr)) arrNum7.push(+pr);
}

console.log(arrNum7);
