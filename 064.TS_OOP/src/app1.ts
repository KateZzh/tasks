// Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Создайте несколько экземпляров класса Student и
// выведите их свойства.

interface iStudent1 {
  name: string;
  age: number;
}

class Student1 {
  public name: string = "Jack";
  public age: number = 18;
}

const student1 = new Student1();

console.log(student1.name, student1.age);
