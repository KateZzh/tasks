// Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.
const array22 = [
    { name: "Helen", salary: 1000 },
    { name: "Polina", salary: 900 },
    { name: "Artem", salary: 1500 },
];
const sumSalary22 = array22.reduce((sum, el) => el.salary + sum, 0);
console.log(Math.round(sumSalary22 / array22.length));
