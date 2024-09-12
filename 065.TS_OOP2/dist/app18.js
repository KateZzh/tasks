// Создайте интерфейс iValidation, который будет описывать методы для проверки: isValidEmail(),
// isValidDate(), isValidPath(). Создайте класс Validation, который реализует интерфейс iValidation.
// Класс будет иметь публичные методы: isValidEmail(), isValidDate(), isValidPath(). Конструктор класса
// Validation должен принимать параметры email, date, path и инициализировать их как поля класса.
// Входные:
// let validation = new Validation('example@mail.com',
// '2023-09-10', '/usr/local/bin');
// validation.isValidEmail();
// → Результат: true
// Входные:
// let validation = new Validation('invalid-email', '2023-09-
// 10', '/usr/local/bin');
// validation.isValidEmail();
// → Результат: false
class Validation1 {
    email;
    date;
    path;
    constructor(email, date, path) {
        this.email = email;
        this.date = date;
        this.path = path;
    }
    isValidEmail() {
        return /^[A-Za-z\.\-]+@[a-z]{2,10}\.[a-z]{2,8}/gm.test(this.email);
    }
    isValidDate() {
        return /^\d{4}\-\d{2}\-\d{2}/gm.test(this.date);
    }
    isValidPath() {
        return /^\/[a-z\/]+/gm.test(this.path);
    }
}
const validation1 = new Validation1('example@mail.com', '2023-09-10', '/usr/local/bin');
console.log(validation1.isValidEmail());
console.log(validation1.isValidDate());
console.log(validation1.isValidPath());
