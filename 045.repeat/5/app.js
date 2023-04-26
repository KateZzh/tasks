// Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив). Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении

class Server {
  middleware() {}

  controller(obj) {
    try {
      const data = this.service(obj);
      return data;
    } catch (error) {
      return error.message;
    }
  }

  service(obj) {
    const data = this.repository(obj)
    return data;
  }

  repository(obj) {
    const arr = [
      { id: 1, email: "yesenia@mail.ru", pwd: "pwdffff" },
      { id: 2, email: "hanna@mail.ru", pwd: "pwdfevcrdv" },
      { id: 3, email: "stanislau@mail.ru", pwd: "pwdtest" },
      { id: 4, email: "german@mail.ru", pwd: "pwdqqq" },
      { id: 5, email: "maria@mail.ru", pwd: "pwdfcel" },
    ];

    const filtered = arr.filter((el) => el.email === obj.email)

    if (filtered.length > 0) throw new Error('такой уже есть');

    arr.push({id: arr.length + 1, ...obj})

    return arr;
  }
}

const obj = JSON.parse(`{"email": "abc@mail.ru", "pwd": "12345678"}`);

const server = new Server();
const data = server.controller(obj);
console.log(data);
