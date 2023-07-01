// Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, surname происходит в конструкторе класса.
// Создайте несколько экземпляров класса Student и выведите их свойства.

interface iStudent {
  name: string;
  age: number;
}

class Student {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const student = new Student("Jack", 18);

console.log(student.name, student.age);
