// Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)
const array19 = [
    { title: "Игрок", author: "Достоевский Ф.М.", price: 20 },
    { title: "Мастер и Маргарита", author: "Булгаков М.А.", price: 35 },
    { title: "Евгений Онегин", author: "Пушкин А.С.", price: 55 },
];
const filtered = array19.filter((el) => el.price > 50);
console.log(filtered);
