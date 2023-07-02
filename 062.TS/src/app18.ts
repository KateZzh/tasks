// Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)

interface iArray18 {
  title: string;
  author: string;
}

const array18: iArray18[] = [
  { title: "Игрок", author: "Достоевский Ф.М." },
  { title: "Мастер и Маргарита", author: "Булгаков М.А." },
  { title: "Евгений Онегин", author: "Пушкин А.С." },
];

const result: iArray18 = array18.find(({ author }) => author === "Булгаков М.А.");

console.log(result);
