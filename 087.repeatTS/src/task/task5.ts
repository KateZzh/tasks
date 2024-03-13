// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом

interface iArr {
  id: number;
  title: string;
  count: number;
  price: number;
}

const arr5: iArr[] = [
  { id: 1, title: 'Часы', count: 10, price: 500 },
  { id: 2, title: 'Смартфон', count: 33, price: 1500 },
  { id: 3, title: 'Моноблок', count: 6, price: 2200 },
  { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
  { id: 5, title: 'Планшет', count: 22, price: 2100 },
];

// const showGoods5 = (arr5: iArr[]) => {
//   let res = arr5[0];

//   for (let el of arr5) {
//     el.price > res.price ? (res = el) : res;
//   }

//   return res;
// };

const showGoods5 = (arr5: iArr[]): iArr => arr5.reduce((res: iArr, el: iArr) => (el.price > res.price ? (res = el) : res));

console.log(showGoods5(arr5));
