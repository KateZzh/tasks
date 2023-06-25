// Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.
const arr12 = [1, 2, 3, 4];
const res12 = arr12.reduce((sum, el, index) => {
    if (index % 2 !== 0) {
        return sum + el;
    }
    else
        return sum + 0;
}, 0);
console.log(res12);
