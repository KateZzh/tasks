// Создать интерфейс iValidation. Создайте класс Validation с приватными методами
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
// Validation. Конструктор принимает поля email, date, path и инициализирует их как
// поля класса. В каждом методе напишите соответствующую проверку

interface iValidation9 {
  email: string;
  date: string;
  path: string;
}

class Validation9 implements iValidation9 {
  email: string;
  date: string;
  path: string;

  constructor(email: string, date: string, path: string) {
    this.email = email;
    this.date = date;
    this.path = path;

    this.isValidEmail();
    this.isValidDate();
    this.isValidPath();
  }

  private isValidEmail(): void {
    console.log(
      /^[a-zA-Z0-9\_\-]+@[a-z]{2,10}\.[a-z]{2,10}$/gm.test(this.email)
        ? "correct email"
        : "incorrect email"
    );
  }

  private isValidDate(): void {
    console.log(
      /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,4}/gm.test(this.date)
        ? "correct date"
        : "incorrect  date"
    );
  }
  private isValidPath(): void {
    console.log(
      /^[A-Z]{1}\:\\\\[a-zA-Z0-9\\а-яА-Я \.]+\.[a-z]{2,4}/gm.test(this.path)
        ? "correct path"
        : "incorrect  path"
    );
  }
}

const validation9 = new Validation9(
  "asd@gmail.com",
  "12.12.2000",
  "C:\\Users\\Dev\\OneDrive\\Рабочий стол\\daily\\Templates\\05. typescript\\app.js"
);
