// Создайте абстрактный класс "Транспортное средство" (Vehicle), в котором будут два абстрактных
// метода: "завести" (start) и "остановить" (stop). Реализуйте два класса-наследника — "Автомобиль"
// (Car) и "Мотоцикл" (Motorcycle). Эти классы должны расширять класс "Транспортное средство" и
// реализовать методы "завести" и "остановить", чтобы они соответствовали поведению этих
// транспортных средств (например, через console.log).
// Входные:
// let car = new Car();
// car.start();
// → Результат: Car started
// Входные:
// let car = new Car();
// car.stop();
// → Результат: Car stopped
// Входные:
// let motorcycle = new Motorcycle();
// motorcycle.start();
// → Результат: Motorcycle started
// Входные:
// let motorcycle = new Motorcycle();
// motorcycle.stop();
// → Результат: Motorcycle stopped
class Vehicle1 {
}
class Car1 extends Vehicle1 {
    start1() {
        console.log('Car started');
    }
    stop1() {
        console.log('Car stopped');
    }
}
class Motorcycle1 extends Vehicle1 {
    start1() {
        console.log('Motorcycle started');
    }
    stop1() {
        console.log('Motorcycle stopped');
    }
}
const car1 = new Car1();
car1.start1();
car1.stop1();
const motorcycle1 = new Motorcycle1();
motorcycle1.start1();
motorcycle1.stop1();
