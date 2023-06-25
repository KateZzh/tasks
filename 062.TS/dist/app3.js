// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
const n3 = 4;
const arr3 = [];
for (let i = 0; i < n3; i++) {
    let pr = prompt();
    if (!isNaN(+pr))
        arr3.push(+pr);
}
const sumArr3 = arr3.reduce((sum, el) => sum + el, 0);
console.log(sumArr3);
