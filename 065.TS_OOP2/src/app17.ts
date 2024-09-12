// Создайте абстрактный класс Fruit (Фрукт) со следующим полем:
// • fruits: массив объектов, где каждый объект имеет свойства id, title
// (название) и price (цена)
// Затем создайте дочерний класс Apple (Яблоко), который наследует
// Fruit. В классе Apple реализуйте метод getAppleInfo(), который должен
// возвращать информацию о яблоке из массива fruits, где title равно
// "яблоко".

// Входные: [ {"id": 1, "title": "яблоко","price": 50}, {"id": 2, "title": "банан","price": 30}, {"id": 3, "title": "груша","price":
//     45} ]
//     → Результат: {"id": 1, "title": "яблоко","price": 50}
//     Входные: [ {"id": 1, "title": "банан","price": 35}, {"id": 2, "title": "киви","price": 70}} ] → Результат: null

interface iFruits {
    id: number;
    title: string;
    price: number;
}

abstract class Fruit1 {
    fruits: Array<iFruits>;
}

class Apple1 extends Fruit1 {
    constructor(fruits: iFruits[]) {
        super();
        this.fruits = fruits;
    }

    getAppleInfo(): iFruits | null {
        const res = this.fruits.find((el) => el.title === 'яблоко');

        if (res === undefined) return null;

        return res;
    }
}
const fruits: iFruits[] = [
    { id: 1, title: 'яблоко', price: 50 },
    { id: 2, title: 'банан', price: 30 },
    { id: 3, title: 'груша', price: 45 },
];

const apple1 = new Apple1(fruits);
console.log(apple1.getAppleInfo());
