// Работа с геттерами и сеттерами. Реализуйте класс Validator. Класс содержит
// getEmail, setEmail, а также метод IsEmail, проверяющий, является ли входная строка
// корректным email (Если является - возвращает true, если не является - false.
// Вызвать из экземпляра класса методы setEmail. getEmail, isEmail

class Validator {
  getEmail = () => this.email;

  setEmail = (email) => (this.email = email);

  IsEmail() {
    try {
      if (!/^[A-Za-z0-9\.\-]+\@[a-z]{2,10}\.[a-z]{2,6}$/gm.test(this.email))
        throw new Error(false);
      return true;
    } catch (error) {
      return error.message;
    }
  }
}

const email = "ek.zh@gmail.com";

const validator = new Validator();
validator.setEmail(email);
const result = validator.IsEmail();
console.log(result);
