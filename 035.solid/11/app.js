// Реализуйте класс Сonversion, сдержащий метод doOctalNumber, преобразующий
// все числа 10 системы счисления в 8

class Conversion {
  doOctalNumber(num, rem) {
    try {
      let arr = [];

      if (isNaN(num)) throw new Error("not a number");

      while (num >= rem.length) {
        let currentRem = num % rem.length;

        arr.push(rem[currentRem]);
        num = (num - currentRem) / rem.length;
      }

      arr.push(rem[num]);

      console.log(arr.reverse().join(""));
    } catch (error) {
      console.log(error.message);
    }
  }
}

const rem = [0, 1, 2, 3, 4, 5, 6, 7];
const num = 375;
const conversion = new Conversion();
conversion.doOctalNumber(num, rem);
