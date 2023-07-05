// Создайте абстрактный класс University, который содержит абстрактный метод
// getStudentById и поле students – массив объектов. Student – класс наследник,
// реализующий абстрактный метод getStudentById.
class University {
    students = [
        { id: 1, name: "Helena" },
        { id: 2, name: "Devid" },
        { id: 3, name: "Olga" },
    ];
}
class Student extends University {
    getStudentById(id) {
        const filtered = this.students.filter((el) => el.id === id);
        console.log(filtered);
    }
}
const student = new Student();
student.getStudentById(3);
