// Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива.

interface iAnaluzer {
  array: Array<Number>;
  getAverage(): number;
  getMax(): number;
  getMin(): number;
}

class ArrayAnalyzer {
  public array: Array<number> = [];

  constructor(num: number) {
    for (let i = 0; i < num; i++) {
      this.array.push(Math.round(Math.random() * 10));
    }

    console.log(this.array);
  }

  getAverage(): number {
    const aver = this.array.reduce((sum, el) => sum + el, 0);
    return aver / this.array.length;
  }

  getMax(): number {
    return Math.max(...this.array);
  }

  getMin(): number {
    return Math.min(...this.array);
  }
}

const arrayAnalyzer = new ArrayAnalyzer(5);

console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());
