// Классы Employee и ProductionWorker.
// Напишите класс Employee (Сотрудник), который содержит:
// • имя сотрудника;
// • номер сотрудника.
// Затем напишите класс ProductionWorker (Рабочий), который является подклассом
// класса Employee.
// Класс ProductionWorker содержит:
// • номер смены (целое число, к примеру, 1, 2 или 3);
// • ставка почасовой оплаты труда.
// Напишите методы получатели и методы-модификаторы для каждого класса.
// После того как эти классы будут написаны, напишите программу, которая создает
// объект класса ProductionWorker и предлагает пользователю ввести данные по
// каждому атрибуту данных этого объекта. Сохраните данные в объекте и
// примените в этом объекте методы получатели, чтобы получить эти данные и
// вывести их на экран.

class Employee {
  nameOfEmployee;
  namberOfEmployee;

  getNameOfEmployee = () => this.nameOfEmployee;
  getNumberOfEmployee = () => this.namberOfEmployee;

  setNameOfEmployee = (nameOfEmployee) =>
    (this.nameOfEmployee = nameOfEmployee);
  setNamberOfEmployee = (namberOfEmployee) =>
    (this.namberOfEmployee = namberOfEmployee);
}

class ProductionWorker extends Employee {
  numberChange;
  hourlyWageRate;

  getNumberChange = () => this.numberChange;
  getHourlyWageRate = () => this.hourlyWageRate;

  setNumberChange = (numberChange) => (this.numberChange = numberChange);
  setHourlyWageRate = (hourlyWageRate) =>
    (this.hourlyWageRate = hourlyWageRate);
}

const productionWorker = new ProductionWorker();
productionWorker.setNameOfEmployee("Kate");
productionWorker.setNamberOfEmployee(28);
productionWorker.setNumberChange(1);
productionWorker.setHourlyWageRate(100);

const nameOfEmployee = productionWorker.getNameOfEmployee();
const numberOfEmployee = productionWorker.getNumberOfEmployee();
const numberChange = productionWorker.getNumberChange();
const hourlyWageRate = productionWorker.getHourlyWageRate();

console.log(nameOfEmployee);
console.log(numberOfEmployee);
console.log(numberChange);
console.log(hourlyWageRate);
