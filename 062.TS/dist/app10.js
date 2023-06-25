// Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.
const arr10 = ["hello", "hey", "hi"];
const mapArr = arr10.map((el) => el.replaceAll(/[^aeiou]+/gm, ""));
console.log(mapArr);
