// Создайте абстрактный класс Animal, содержащий абстрактный метод
// makeSound(). Напишите дочерние классы Dog и Cat, которые наследуют Animal и
// реализуют метод makeSound() для издания соответствующего звука. Создайте
// объекты классов Dog и Cat и вызовите их методы makeSound().

abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound() {
    console.log("woof");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("meow");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound();
cat.makeSound();
