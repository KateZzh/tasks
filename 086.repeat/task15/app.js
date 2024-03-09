// Создать функцию groupStudentsByAge, которая сгруппирует студентов по
// возрасту. На выходе получить объект, где ключ – возраст, а значение – массив
// студентов

const students = [
  { name: 'alex', age: 20 },
  { name: 'mike', age: 24 },
  { name: 'masha', age: 20 },
  { name: 'stas', age: 18 },
];

const groupStudentsByAge = (students) => {
  const res = {};

  for (let el of students) {
    res[el.age] ? res[el.age].push(el) : (res[el.age] = [el]);
  }

  return res;
};

console.log(groupStudentsByAge(students));
