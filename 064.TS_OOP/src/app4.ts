// Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, surname происходит в getter, setter класса.
// Создайте несколько экземпляров класса Student и выведите их свойства.

interface iStudent {
  name: string;
  age: number;
  getName(): string;
  getAge(): number;
  setName(name: string): void;
  setAge(age: number): void;
}

class Student4 {
  public name: string;
  public age: number;

  getName(): string {
    return this.name;
  }
  getAge(): number {
    return this.age;
  }

  setName(name: string): void {
    this.name = name;
  }
  setAge(age: number): void {
    this.age = age;
  }
}

const student4 = new Student4();

student4.setAge(18);
student4.setName("Jack");

console.log(student4.getAge(), student4.getName());
