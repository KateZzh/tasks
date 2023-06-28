// На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]
const n15 = 3;
let arr15 = [];
let newArr15 = [];
for (let i = 0; i < n15; i++) {
    arr15.push(prompt());
}
arr15.forEach((el) => newArr15.push("!" + el));
console.log(newArr15);
