// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false

const n = 10;
let arr1 = [];
let arr2 = [];

for (let i = 0; i < n; i++) {
  let pr = prompt("");

  if (i < 5) {
    arr1.push(pr);
  } else arr2.push(pr);
}

let sort1 = arr1.sort();
let sort2 = arr2.sort();

if (sort1.join("") === sort2.join("")) {
  console.log(true);
} else console.log(false);