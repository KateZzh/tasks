// Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь
class Rectangle {
    getArea(width, height) {
        return width * height;
    }
}
const rectangle = new Rectangle();
console.log(rectangle.getArea(2, 5));
