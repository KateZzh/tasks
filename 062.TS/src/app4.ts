// Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.

const arr4: string[] = [];
const n4: number = 4;

for (let i = 0; i < n4; i++) {
  let pr: string = prompt();
  arr4.push(pr);
}

const res4 = arr4.some((el) => el.length > 5);

console.log(res4);
