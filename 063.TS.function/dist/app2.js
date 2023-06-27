// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке
const obj2 = [
    { id: 1, title: "Часы", count: 10, price: 500 },
    { id: 2, title: "Смартфон", count: 33, price: 1500 },
    { id: 3, title: "Моноблок", count: 6, price: 2200 },
    { id: 4, title: "Ноутбук", count: 13, price: 3000 },
    { id: 5, title: "Планшет", count: 22, price: 2100 },
];
function showProducts(obj2) {
    const reverseProducts = [];
    for (let i = obj2.length - 1; i >= 0; i--) {
        reverseProducts.push(obj2[i]);
    }
    return reverseProducts;
}
const res2 = showProducts(obj2);
console.log(res2);
