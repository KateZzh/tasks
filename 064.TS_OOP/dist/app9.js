// Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r
class CircleC {
    getCircumference(r) {
        return 2 * 3.14 * r;
    }
}
const circleC = new CircleC();
console.log(circleC.getCircumference(5));
