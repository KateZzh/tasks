// На сервере реализуйте возможность регистрации doRegistration. Если почта
// клиента уникальна и массив репозитория не содержит такую почту, то сохранить
// клиентский объект в массив.
// Допишите функционал регистрации. Небезопасно хранить в БД пароль в
// пользовательском виде. Необходимо написать алгоритм шифрования с помощью
// шифра Цезаря.
// Задание: На сервер подается объект с ключом pwd, как и сделано в предыдущем
// задании. Пароль – строка текста на английском языке, в которой нужно
// зашифровать все слова. Каждое слово строки следует зашифровать с помощью
// шифра Цезаря (циклического сдвига на длину этого слова). Буквы верхнего и
// нижнего регистров при этом не изменяют свой первоначальный регистр

class Server {
  controller(obj) {
    try {
      const data = this.service(obj);
      return data;
    } catch (error) {
      return error.message;
    }
  }

  service(obj) {
    const data = this.repository(obj);
    return data;
  }

  repository(obj) {
    let arr = [
      { id: 1, email: "yesenia@mail.ru", pwd: "pwdffff" },
      { id: 2, email: "hanna@mail.ru", pwd: "pwdfevcrdv" },
      { id: 3, email: "stanislau@mail.ru", pwd: "pwdtest" },
      { id: 4, email: "german@mail.ru", pwd: "pwdqqq" },
      { id: 5, email: "maria@mail.ru", pwd: "pwdfcel" },
    ];

    const filtered = arr.filter((el) => el.email === obj.email);

    if (filtered.length > 0) throw new Error("есть совпадение");

    const hashPwd = this.generatePwd(obj.pwd);

    arr.push({ id: arr.length + 1, email: obj.email, pwd: hashPwd });

    return arr;
  }

  generatePwd(pwd) {
    const str = "abcdefghijklmnopqrstuvwxyzabc";
    let newPwd = "";

    for (let i = 0; i < pwd.length; i++) {
      newPwd += str[str.indexOf(pwd[i]) + 3];
    }
    
    return newPwd;
  }
}

class Client {
  doRegistration() {
    document.querySelector("button").addEventListener("click", () => {
      const email = document.querySelector(".email");
      const pwd = document.querySelector(".pwd");
      const div = document.querySelector("div");

      const server = new Server();
      const reg = server.controller({ email: email.value, pwd: pwd.value });

      div.innerHTML = JSON.stringify(reg);
    });
  }
}

const client = new Client();
client.doRegistration();
