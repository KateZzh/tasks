// Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Инициализация свойств name, surname происходит с
// помощью экземпляра класса. Создайте несколько экземпляров класса Student и
// выведите их свойства.

interface iStudent {
  name: string;
  age: number;
}

class Student2 {
  public name: string;
  public age: number;
}

const student2: iStudent = new Student2();

student2.name = "Jack";
student2.age = 18;

console.log(student2.name, student2.age);
