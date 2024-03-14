// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением

interface iArr {
  id: number;
  title: string;
  count: number;
  price: number;
}

const arr7: iArr[] = [
  { id: 1, title: 'Часы', count: 10, price: 500 },
  { id: 2, title: 'Смартфон', count: 33, price: 1500 },
  { id: 3, title: 'Моноблок', count: 6, price: 2200 },
  { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
  { id: 5, title: 'Планшет', count: 22, price: 2100 },
];

const showGoods7 = (arr7: iArr[]): iArr[] => {
  const findMax: number = arr7.reduce((sum: number, el: iArr) => (el.count * el.price > sum ? (sum = el.count * el.price) : sum), 0);

  return arr7.filter((el: iArr) => el.count * el.price === findMax);
};

console.log(showGoods7(arr7));
