// У вас есть массив объектов вида приведенного в приложении. Пользователь
// вводит значение id: например, 1. Необходимо отобразить в консоль найденный
// объект используя алгоритм бинарного поиска.
const array10 = [
    { id: 1, title: "Часы", count: 10, price: 500 },
    { id: 2, title: "Смартфон", count: 33, price: 1500 },
    { id: 3, title: "Моноблок", count: 6, price: 2200 },
    { id: 4, title: "Ноутбук", count: 13, price: 3000 },
    { id: 5, title: "Планшет", count: 22, price: 2100 },
];
function getId(array10) {
    let id = 4;
    let start = 0;
    let end = array10.length;
    for (let i = start; i <= end; i++) {
        let middle = Math.round((start + end) / 2);
        if (id === middle) {
            console.log(array10[middle - 1]);
            break;
        }
        else if (id > middle) {
            start = middle;
        }
        else if (id < middle) {
            end = middle;
        }
    }
}
getId(array10);
