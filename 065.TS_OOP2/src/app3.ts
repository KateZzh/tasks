// Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко.

interface iFruit {
  id: number;
  title: string;
  price: number;
}

abstract class Fruit {
  abstract array: iFruit[];
}

class Apple extends Fruit {
  array: iFruit[] = [
    { id: 1, title: "apple", price: 5 },
    { id: 2, title: "pineapple", price: 8 },
    { id: 3, title: "orange", price: 6 },
  ];

  public getAppleInfo(): iFruit[] {
    const filtered = this.array.filter((el) => el.title === "apple");

    return filtered;
  }
}

const apple = new Apple();

const resFr = apple.getAppleInfo();
console.log(resFr);

