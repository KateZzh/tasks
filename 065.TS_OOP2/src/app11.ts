// Создайте абстрактный класс University, который содержит абстрактный метод
// getStudentById и поле students – массив объектов. Student – класс наследник,
// реализующий абстрактный метод getStudentById.

interface iStudents {
  id: number;
  name: string;
}

abstract class University {
  abstract getStudentById(id: number): void;

  students: iStudents[] = [
    { id: 1, name: "Helena" },
    { id: 2, name: "Devid" },
    { id: 3, name: "Olga" },
  ];
}

class Student extends University {
  getStudentById(id: number): void {
    const filtered: iStudents[] = this.students.filter((el: iStudents) => el.id === id);

    console.log(filtered);
  }
}

const student = new Student();

student.getStudentById(3);
