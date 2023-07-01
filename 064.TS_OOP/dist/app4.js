// Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, surname происходит в getter, setter класса.
// Создайте несколько экземпляров класса Student и выведите их свойства.
class Student4 {
    name;
    age;
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}
const student4 = new Student4();
student4.setAge(18);
student4.setName("Jack");
console.log(student4.getAge(), student4.getName());
