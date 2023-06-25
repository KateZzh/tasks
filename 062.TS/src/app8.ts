// Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.

const arr8: string[] = ["hey", "hi", "aha", "hello", "sos"];

const filteredArr8: string[] = arr8.filter(
  (el) => el === el.split("").reverse().join("")
);

console.log(filteredArr8);
