// Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)

interface iArray19 {
  title: string;
  author: string;
  price: number;
}

const array19: iArray19[] = [
  { title: "Игрок", author: "Достоевский Ф.М.", price: 20 },
  { title: "Мастер и Маргарита", author: "Булгаков М.А.", price: 35 },
  { title: "Евгений Онегин", author: "Пушкин А.С.", price: 55 },
];

const filtered: iArray19[] = array19.filter((el: iArray19) => el.price > 50);

console.log(filtered);
