// Реализуйте класс ServerPut. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// {"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки

class ServerPut {
  controller(data) {
    try {
      const serv = this.service(data);
      return serv;
    } catch (error) {
      return error.message;
    }
  }

  service(data) {
    const rep = this.repository(data);
    return rep;
  }

  repository(data) {
    const arr = [
      {
        id: "typescript",
        label: "TypeScript",
        category: "programmingLanguages",
        priority: 1,
      },
      {
        id: "sql",
        label: "SQL",
        category: "programmingLanguages",
        priority: 2,
      },
      {
        id: "java",
        label: "Java",
        category: "programmingLanguages",
        priority: 3,
      },
      { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
      {
        id: "javascript",
        label: "JavaScript",
        category: "programmingLanguages",
        priority: 1,
      },
    ];

    const filtered = arr.filter((el) => el.id !== data.id);

    if (filtered.length === arr.length) {
      throw new Error("совпадения по id нет");
    } else {
      filtered.push(data);
    }
    return filtered;
  }
}

const data = JSON.parse(`
{ "id": "javascript",
  "label": "JavaScript",
  "category": "programmingLanguages",
  "priority": 1
}`);

const serverPut = new ServerPut();
const update = serverPut.controller(data);
console.log(update);
