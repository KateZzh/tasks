// Наследование. Работа с геттерами и сеттерами. Классы Person и Customer.
// Напишите класс Person с атрибутами данных для имени, фамилии. Затем напишите
// класс Customer, который является подклассом класса Person. Класс Customer
// должен иметь поле телефонного номера человека. Продемонстрируйте экземпляр
// класса Customer вызвав геттеры и сеттеры собственного класса и базового

class Person {
  getName = () => this.name;
  getSurname = () => this.surname;

  setName = (name) => (this.name = name);
  setSurname = (surname) => (this.surname = surname);
}

class Customer extends Person {
  getPhone = () => this.phone;

  setPhone = (phone) => (this.phone = phone);
}

const customer = new Customer();

customer.setPhone("+375441234567");
customer.setName("Kate");
customer.setSurname("Zh");

const phone = customer.getPhone();
const name_ = customer.getName();
const surname = customer.getSurname();

console.log(name_, surname, phone);
