// Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
// абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классынаследники "Автомобиль" (Car) и
// "Мотоцикл" (Motorcycle), которые расширяют
// класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
// особенностями каждого транспортного средства. (седержимое методов:
// console.log)
class Vehicle {
}
class Car extends Vehicle {
    start() {
        console.log("start car");
    }
    stop() {
        console.log("stop car");
    }
    test() {
        console.log("test");
    }
}
class Motorcycle extends Vehicle {
    start() {
        console.log("start motocycle");
    }
    stop() {
        console.log("stop motocycle");
    }
}
const car = new Car();
const motorcycle = new Motorcycle();
car.start();
car.stop();
car.test();
motorcycle.start();
motorcycle.stop();
