// Реализуйте класс Calculator, который будет содержать метод doSqrt,
// возвращающий корень числа принимаемого в параметрах.

// class Calculator {
//   isValid(n_) {
//     if (isNaN(n_)) throw new Error("not a number");
//     if (n_ === "") throw new Error("empty");
//   }

//   doSqrt(n) {
//     try {
//       this.isValid(n);

//       console.log(Math.sqrt(n));
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }

// const calculator = new Calculator();
// calculator.doSqrt(4);
// calculator.doSqrt("j");
// calculator.doSqrt("");

class Calculator {
  constructor(num) {
    this.num = num;
  }

  isValid(num_) {
    if (isNaN(num_)) throw new Error("not a number");
    if (num_ === "") throw new Error("empty");
  }

  doSqrt() {
    try {
      this.isValid(this.num);

      console.log(Math.sqrt(this.num));
    } catch (error) {
      console.log(error.message);
    }
  }
}

const calculator = new Calculator(4);
calculator.doSqrt();
