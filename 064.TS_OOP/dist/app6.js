// Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.
class Calculator {
    a;
    b;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        console.log(this.a + this.b);
    }
    subtract() {
        console.log(this.a - this.b);
    }
    multiply() {
        console.log(this.a * this.b);
    }
    divide() {
        console.log(this.a / this.b);
    }
}
const calculator = new Calculator(9, 3);
calculator.add();
calculator.subtract();
calculator.multiply();
calculator.divide();
