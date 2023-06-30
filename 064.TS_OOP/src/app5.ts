// Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь

interface iRectangle {
  getArea(width: number, height: number): number;
}

class Rectangle {
  public getArea(width: number, height: number): number {
    return width * height;
  }
}

const rectangle: iRectangle = new Rectangle();

console.log(rectangle.getArea(2, 5));
