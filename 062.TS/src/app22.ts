// Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.

interface iArray22 {
  name: string;
  salary: number;
}

const array22: iArray22[] = [
  { name: "Helen", salary: 1000 },
  { name: "Polina", salary: 900 },
  { name: "Artem", salary: 1500 },
];

const sumSalary22: number = array22.reduce((sum: number, el: iArray22) => el.salary + sum, 0);

console.log(Math.round(sumSalary22 / array22.length));
