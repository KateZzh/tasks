// Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко.
class Fruit {
}
class Apple extends Fruit {
    array = [
        { id: 1, title: "apple", price: 5 },
        { id: 2, title: "pineapple", price: 8 },
        { id: 3, title: "orange", price: 6 },
    ];
    getAppleInfo() {
        const filtered = this.array.filter((el) => el.title === "apple");
        return filtered;
    }
}
const apple = new Apple();
const resFr = apple.getAppleInfo();
console.log(resFr);
