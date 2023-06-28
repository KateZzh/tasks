// На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]

const n15: number = 3;
let arr15: string[] = [];
let newArr15: string[] = [];

for (let i = 0; i < n15; i++) {
  arr15.push(prompt());
}

arr15.forEach((el: string) => newArr15.push("!" + el));

console.log(newArr15);
