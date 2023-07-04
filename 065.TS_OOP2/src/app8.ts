// Создайте класс PasswordGenerator, который будет иметь метод generatePassword,
// позволяющий генерировать случайные безопасные пароли заданной длины.
// Метод generatePassword принимает в качестве параметра длину пароля.
// Использовать Generics

class PasswordGenerator {
  generatePassword<MyType8>(pwdLength: MyType8) {
    const symbols: string = "qwertyuiopasdfghjklzxcvbnm,./1234567890-=!@#$%^&&*()_+=";
    let password: string = "";

    if (typeof pwdLength === "number") {
      for (let i = 0; i < pwdLength; i++) {
        password += symbols[Math.round(Math.random() * symbols.length)];
      }

      return password;
    }
  }
}

const passwordGenerator = new PasswordGenerator();

console.log(passwordGenerator.generatePassword<number>(30));
