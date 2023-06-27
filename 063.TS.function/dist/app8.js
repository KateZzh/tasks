// У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту
const arr8 = [
    "asd@.gmail.com",
    "aaa@.gmail.com",
    "ll@.gmail.com",
    "asd@.gmail.com",
    "aaa@.gmail.com",
    "ll@.gmail.com",
];
function deleteDublicate(arr8) {
    let newArr8 = [];
    for (let i = 0; i < arr8.length; i++) {
        if (!newArr8.includes(arr8[i]))
            newArr8.push(arr8[i]);
    }
    return newArr8;
}
const res8 = deleteDublicate(arr8);
console.log(res8);
