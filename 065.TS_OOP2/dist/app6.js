// Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива.
class ArrayAnalyzer {
    array = [];
    constructor(num) {
        for (let i = 0; i < num; i++) {
            this.array.push(Math.round(Math.random() * 10));
        }
        console.log(this.array);
    }
    getAverage() {
        const aver = this.array.reduce((sum, el) => sum + el, 0);
        return aver / this.array.length;
    }
    getMax() {
        return Math.max(...this.array);
    }
    getMin() {
        return Math.min(...this.array);
    }
}
const arrayAnalyzer = new ArrayAnalyzer(5);
console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());
