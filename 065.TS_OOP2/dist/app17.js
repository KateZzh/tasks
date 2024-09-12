// Создайте абстрактный класс Fruit (Фрукт) со следующим полем:
// • fruits: массив объектов, где каждый объект имеет свойства id, title
// (название) и price (цена)
// Затем создайте дочерний класс Apple (Яблоко), который наследует
// Fruit. В классе Apple реализуйте метод getAppleInfo(), который должен
// возвращать информацию о яблоке из массива fruits, где title равно
// "яблоко".
class Fruit1 {
    fruits;
}
class Apple1 extends Fruit1 {
    constructor(fruits) {
        super();
        this.fruits = fruits;
    }
    getAppleInfo() {
        const res = this.fruits.find((el) => el.title === 'яблоко');
        if (res === undefined)
            return null;
        return res;
    }
}
const fruits = [
    { id: 1, title: 'яблоко', price: 50 },
    { id: 2, title: 'банан', price: 30 },
    { id: 3, title: 'груша', price: 45 },
];
const apple1 = new Apple1(fruits);
console.log(apple1.getAppleInfo());
