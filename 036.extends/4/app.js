// Реализовать следующие классы Круг, Треугольник и Квадрат, которые
// наследуются от Figure. Каждый экземпляр класса должен содержать свойства
// Площадь и Имя. Вывести всю информацию о фигурах в консоль. Площадь должна
// рассчитываться по математическим формулам. Класс Figure содержит поля: pi =
// 3.14, r = radius, a = side, h = height, а также сеттеры для данных полей. Дочерние
// классы содержать геттеры на получение площади

class Figure {
  setPi = (pi) => (this.pi = pi);
  setR = (r) => (this.r = r);
  setA = (a) => (this.a = a);
  setH = (h) => (this.h = h);
  setName = (name) => (this.name = name);
}

class Circle extends Figure {
  circleArea = () => `${this.name} area: ${this.pi * this.r ** 2}`;
}

class Triangle extends Figure {
  triangleArea = () => `${this.name} area: ${0.5 * this.a * this.h}`;
}

class Square extends Figure {
  squareArea = () => `${this.name} area: ${this.a ** 2}`;
}

const circle = new Circle();
circle.setName("circle");
circle.setPi(3.14);
circle.setR(5);

console.log(circle.circleArea());

const triangle = new Triangle();
triangle.setName("triangle");
triangle.setA(10);
triangle.setH(4);

console.log(triangle.triangleArea());

const square = new Square();
square.setName("square");
square.setA(10);

console.log(square.squareArea());
