// pattern prototype

class BubbleCar {
  constructor(model, interior, transmission, price) {
    this.model = model;
    this.interior = interior;
    this.transmission = transmission;
    this.price = price;
  }

  produce() {
    return new BubbleCar(this.model, this.interior, this.transmission, this.price);
  }
}

const prototypeCar = new BubbleCar('lightness', 'white', 'automatic', 25000);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car1.transmission = 'mechanics';
car1.interior = 'black';
car1.price = 20000;

car2.interior = 'black';
car2.price = 24000;

console.log(car1);
console.log(car2);
console.log(car3);
