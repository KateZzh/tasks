// Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

interface iArray23 {
  name: string;
  price: number;
  count: number;
}

const array23: iArray23[] = [
  { name: "milk", price: 2, count: 10 },
  { name: "cheese", price: 5, count: 5 },
  { name: "bread", price: 1, count: 15 },
];

const totalPrice: number = array23.reduce((sum: number, el: iArray23) => sum + el.price * el.count, 0);

console.log(totalPrice);
