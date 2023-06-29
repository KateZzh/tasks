// Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
// getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
// выведите площадь окружности. Площадь круга: π * r^2
class CircleR {
    getArea(r) {
        return 3.14 * r ** 2;
    }
}
const circleR = new CircleR();
console.log(circleR.getArea(5));
