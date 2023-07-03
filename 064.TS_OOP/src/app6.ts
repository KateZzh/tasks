// Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.

interface iCalculator {
  a: number;
  b: number;
  add(): void;
  subtract(): void;
  multiply(): void;
  divide(): void;
}

class Calculator {
  public a: number;
  public b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  add(): void {
    console.log(this.a + this.b);
  }

  subtract(): void {
    console.log(this.a - this.b);
  }

  multiply(): void {
    console.log(this.a * this.b);
  }

  divide(): void {
    console.log(this.a / this.b);
  }
}

const calculator = new Calculator(9, 3);

calculator.add();
calculator.subtract();
calculator.multiply();
calculator.divide();
