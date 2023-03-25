// Реализуйте класс Сonversion, сдержащий метод doBinaryNumber, преобразующий
// все числа 2 системы счисления в 10

class Conversion {
  doBinaryNumber(binaryNum) {
    try {
      const arrBinaryNum = binaryNum.split("");
      let numDecimalNumber = 0;
      let count = 0;

      if (!this.isValid(arrBinaryNum))
        throw new Error("Число содержит символы, отсутствующие в выбранной системе счисления");

      for (let i = arrBinaryNum.length - 1; i >= 0; i--) {
        numDecimalNumber += arrBinaryNum[count] * 2 ** i;
        count++;
      }

      console.log(numDecimalNumber);
    } catch (error) {
      console.log(error.message);
    }
  }

  isValid(arrBinaryNum) {
    const bool = arrBinaryNum.every((el) => el == 0 || el == 1);
    return bool;
  }
}

const binaryNum = "101110111";

const conversion = new Conversion();
conversion.doBinaryNumber(binaryNum);
