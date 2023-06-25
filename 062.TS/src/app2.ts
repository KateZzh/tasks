// Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a.

const str2: string[] = ["hello", "are", "hey"];

const filteredStr2: string[] = str2.filter((el) => el.includes("a"));

console.log(filteredStr2);
