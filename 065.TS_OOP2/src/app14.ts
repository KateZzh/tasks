// 1. Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
// (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
// наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула
// для вычисления площади прямоугольника: S = длина * ширина
// Входные: Rectangle(5, 4)→ Результат: 20
// Входные: Rectangle(10, 3)→ Результат: 30
// Входные: Rectangle(7, 7)→ Результат: 49

// abstract class Shape1 {
//     abstract calculateArea(a: number, b: number): number;
// }

// class Rectangle1 extends Shape1 {
//     calculateArea<T>(a: T, b: T): number {
//         if (typeof a === 'number' && typeof b === 'number') return a * b;
//     }
// }

// const rectangle1 = new Rectangle1();
// console.log(rectangle1.calculateArea<number>(5, 4));

abstract class Shape1 {
    abstract calculateArea(): number;
}

class Rectangle1 extends Shape1 {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        super();
        this.a = a;
        this.b = b;
    }

    calculateArea(): number {
        if (typeof this.a === 'number' && typeof this.b === 'number') return this.a * this.b;
    }
}

const rectangle1 = new Rectangle1(5, 4);
console.log(rectangle1.calculateArea());
