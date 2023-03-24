// Реализуйте класс Сonversion, сдержащий метод do DecimalNumber, преобразующий
// все числа 10 системы счисления в 2

// class Conversion {
//   doDecimalNumber(num) {
//     try {
//       if (isNaN(num)) throw new Error("not a number");

//       let arr = [];
//       let rem = 0;

//       while (num >= 2) {
//         rem = num % 2;
//         arr.push(rem);
//         num = (num - rem) / 2;
//       }

//       arr.push(num);

//       console.log(arr.reverse().join(""));
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }

// const num = 375;
// const conversion = new Conversion();
// conversion.doDecimalNumber(num);

class Conversion {
  doDecimalNumber(num) {
    try {
      if (isNaN(num)) throw new Error("not a number");

      let arr = [];
      let rem = [0, 1];

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

const num = 375;
const conversion = new Conversion();
conversion.doDecimalNumber(num);
