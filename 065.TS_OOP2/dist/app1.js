// Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
// abstract class Shape {
//   abstract calculateArea(h: number, w: number): number;
// }
// class Rectangle extends Shape {
//   calculateArea(h: number, w: number): number {
//     return h * w;
//   }
// }
// const rectangle = new Rectangle();
// console.log(rectangle.calculateArea(2, 3));
class Shape {
}
class Rectangle extends Shape {
    calculateArea(h, w) {
        if (typeof (h) === "number" && typeof (w) === "number")
            return h * w;
    }
}
const rectangle = new Rectangle();
console.log(rectangle.calculateArea(2, 3));
