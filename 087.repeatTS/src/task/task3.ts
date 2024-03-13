// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3

interface iArr {
  id: number;
  title: string;
  count: number;
  price: number;
}

const arr3: iArr[] = [
  { id: 1, title: 'Часы', count: 10, price: 500 },
  { id: 2, title: 'Смартфон', count: 33, price: 1500 },
  { id: 3, title: 'Моноблок', count: 6, price: 2200 },
  { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
  { id: 5, title: 'Планшет', count: 22, price: 2100 },
];

const showGoods3 = (arr3: iArr[]): iArr[] => arr3.filter((el: iArr) => el.count % 3 === 0);

console.log(showGoods3(arr3));
