// Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте экземпляр класса Customer в простой программе

class Person {
  name;
  address;
  numberOfPhone;

  getName = () => this.name;
  getAddress = () => this.address;
  getNumberOfPhone = () => this.numberOfPhone;

  setName = (name) => (this.name = name);
  setAddress = (address) => (this.address = address);
  setNumberOfPhone = (numberOfPhone) => (this.numberOfPhone = numberOfPhone);
}

class Customer extends Person {
  numberOfClient;
  bool;

  getNumberOfClient = () => this.numberOfClient;
  getBool = () => this.bool;

  setNumberOfClient = (numberOfClient) =>
    (this.numberOfClient = numberOfClient);
  setBool = (bool) => (this.bool = bool);
}

const customer = new Customer();
customer.setName("Kate");
customer.setAddress("mira");
customer.setNumberOfPhone("123456");
customer.setNumberOfClient("1");
customer.setBool(false);

const name1 = customer.getName();
const address = customer.getAddress();
const numberOfPhone = customer.getNumberOfPhone();
const numberOfClient = customer.getNumberOfClient();
const bool = customer.getBool();

console.log(name1, address, numberOfPhone, numberOfClient, bool);
