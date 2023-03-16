// Реализуйте класс MathCalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

class MathCalculation {
  constructor(n) {
    this.n = n;
  }

  findChet() {
    try {
      let arr = [];

      if (isNaN(this.n)) throw new Error("is not a number");

      for (let i = 0; i < this.n; i++) {
        arr.push(Math.round(Math.random() * 10));
      }

      const doChet = arr.filter((el) => el % 2 === 0);
      return `even numbers: ${doChet}  quantity: ${doChet.length}`;
    } catch (error) {
      return error.message;
    }
  }
}

const mathCalculation = new MathCalculation(10);
const res = mathCalculation.findChet();
console.log(res);
