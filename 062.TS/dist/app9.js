// Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.
const arr9 = ["123", "123", "asd", "ss", "123"];
let resArr9 = [];
for (let i = 0; i < arr9.length; i++) {
    if (!resArr9.includes(arr9[i]))
        resArr9.push(arr9[i]);
}
console.log(resArr9);
