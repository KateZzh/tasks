// Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.

const arr10: string[] = ["hello", "hey", "hi"];

const mapArr: string[] = arr10.map((el) => el.replaceAll(/[^aeiou]+/gm, ""));

console.log(mapArr);

