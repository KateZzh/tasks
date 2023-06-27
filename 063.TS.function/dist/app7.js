// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением
const arr7 = [
    { id: 1, title: "Часы", count: 10, price: 500 },
    { id: 2, title: "Смартфон", count: 33, price: 1500 },
    { id: 3, title: "Моноблок", count: 6, price: 2200 },
    { id: 4, title: "Ноутбук", count: 13, price: 3000 },
    { id: 5, title: "Планшет", count: 22, price: 2100 },
];
function doMaxPrice(arr7) {
    const maxPrice = arr7.map((el) => el.count * el.price);
    return Math.max(...maxPrice);
}
const res7 = doMaxPrice(arr7);
console.log(res7);
