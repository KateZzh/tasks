// На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты

let arr11: string[] = ["asd@gmail.com", "ttt@gmail.com"];

const everyArr: boolean = arr11.every((el) =>
  /^[a-zA-Z0-9\_]+\@+[a-z]{4,}\.[ru|com]+$/gm.test(el)
);

console.log(everyArr);
