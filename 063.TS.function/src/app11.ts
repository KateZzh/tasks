// У вас есть массив строковых значений. Необходимо вывести количество
// дубликатов в массиве:
// [1, 2, 1, 2, 3, 4, 5, 1] -> 3

const arr11: number[] = [1, 2, 1, 2, 3, 4, 5, 1];
let count: number = 0;

function findCountDubl(arr11: number[]) {
  let temp: number[] = [];

  for (let i = 0; i < arr11.length; i++) {
    !temp.includes(arr11[i]) ? temp.push(arr11[i]) : count++;
  }
}

findCountDubl(arr11);

console.log(count);
