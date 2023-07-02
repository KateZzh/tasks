// Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)

interface iArray20 {
  title: string;
  author: string;
  price: number;
  count: number;
}

const array20: iArray20[] = [
  { title: "Игрок", author: "Достоевский Ф.М.", price: 20, count: 250 },
  { title: "Мастер и Маргарита", author: "Булгаков М.А.", price: 35, count: 300,},
  { title: "Евгений Онегин", author: "Пушкин А.С.", price: 55, count: 100 },
];

let temp20: number = array20[0].count;

for (let i = 1; i < array20.length; i++) {
  if (array20[i].count > temp20) temp20 = array20[i].count;
}

const result20: iArray20 = array20.find(({ count }) => count === temp20);

console.log(result20);
