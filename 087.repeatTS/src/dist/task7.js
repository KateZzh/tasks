// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением
const arr7 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
const showGoods7 = (arr7) => {
    const findMax = arr7.reduce((sum, el) => (el.count * el.price > sum ? (sum = el.count * el.price) : sum), 0);
    return arr7.filter((el) => el.count * el.price === findMax);
};
console.log(showGoods7(arr7));
