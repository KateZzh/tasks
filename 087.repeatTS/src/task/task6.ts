// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов

interface iArr {
  id: number;
  title: string;
  count: number;
  price: number;
}

const arr6: iArr[] = [
  { id: 1, title: 'Часы', count: 10, price: 500 },
  { id: 2, title: 'Смартфон', count: 33, price: 1500 },
  { id: 3, title: 'Моноблок', count: 6, price: 2200 },
  { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
  { id: 5, title: 'Планшет', count: 22, price: 2100 },
];

// const showGoods6 = (arr6: iArr[]): number => {
//   // let sum: number = 0;

//   // for (let el of arr6) {
//   //   sum += el.price;
//   // }

//   // arr6.forEach((el: iArr) => (sum += el.price));

//   const res: number = arr6.reduce((sum: number, el: iArr) => sum + el.price, 0);

//   return res / arr6.length;
// };

const showGoods6 = (arr6: iArr[]): number => arr6.reduce((sum: number, el: iArr) => sum + el.price, 0) / arr6.length;

console.log(showGoods6(arr6));
