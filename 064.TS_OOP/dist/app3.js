// Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, surname происходит в конструкторе класса.
// Создайте несколько экземпляров класса Student и выведите их свойства.
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const student = new Student("Jack", 18);
console.log(student.name, student.age);
