// Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
// getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
// выведите площадь окружности. Площадь круга: π * r^2

// interface iCircleR {
//   radius: number;
//   getArea(): number;
// }

// class CircleR {
//   public radius: number;

//   public getArea(): number {
//     return 3.14 * this.radius ** 2;
//   }
// }

// const circleR: iCircleR = new CircleR();
// circleR.radius = 5;

// console.log(circleR.getArea());

interface iCircleR {
  getArea(r: number): number;
}

class CircleR {
  public getArea(r: number): number {
    return 3.14 * r ** 2;
  }
}

const circleR: iCircleR = new CircleR();

console.log(circleR.getArea(5));
