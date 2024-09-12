// Создайте класс ArrayAnalyzer, который будет содержать массив чисел как поле класса,
// инициализируемое через конструктор. Реализуйте методы:
// • getAverage для вычисления среднего значения массива,
// • getMax для поиска максимального значения в массиве,
// • getMin для поиска минимального значения в массиве.

// Входные:
// let analyzer = new ArrayAnalyzer([1, 2, 3, 4, 5]);
// analyzer.getAverage();
// → Результат: 3
// Входные:
// let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
// analyzer.getMax();
// → Результат: 30
// Входные:
// let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
// analyzer.getMin();
// → Результат: 5

class ArrayAnalyzer1 {
    arr: number[];

    constructor(arr: number[]) {
        this.arr = arr;
    }

    getAverage(): number {
        const sum = this.arr.reduce((sum, el) => sum + el);

        return Math.round(sum / this.arr.length);
    }

    getMax(): number {
        return this.arr.sort((a, b) => a - b)[0];
    }

    getMin(): number {
        return this.arr.sort((a, b) => b - a)[0];
    }
}

const arrayAnalyzer1 = new ArrayAnalyzer1([10, 20, 5, 30, 15]);

console.log(arrayAnalyzer1.getAverage());
console.log(arrayAnalyzer1.getMax());
console.log(arrayAnalyzer1.getMin());
