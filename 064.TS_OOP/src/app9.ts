// Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r

// interface iCircleC {
//   radius: number;
//   getCircumference(): number;
// }

// class CircleC {
//   public radius: number;

//   public getCircumference(): number {
//     return 2 * 3.14 * this.radius;
//   }
// }

// const circleC: iCircleC = new CircleC();
// circleC.radius = 5;

// console.log(circleC.getCircumference());

interface iCircleC {
  getCircumference(r: number): number;
}

class CircleC {
  public getCircumference(r: number): number {
    return 2 * 3.14 * r;
  }
}

const circleC: iCircleC = new CircleC();

console.log(circleC.getCircumference(5));
