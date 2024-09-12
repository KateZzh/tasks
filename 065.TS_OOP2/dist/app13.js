// Реализуйте класс ServerPost. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая: middleware -> controller -> service -> repository, где:
// Задание:
// на вход подается JSON вида: `{ "email": "Test", "pws": "test" }`
// Необходимо добавить в массив БД объект только в том случае, если нет
// совпадений по email.
class ServerPost {
    middleware(data) {
        if (!/^[A-Za-z0-9\.\-]+\@[a-z]{2,8}\.[a-z]{2,6}/gm.test(data.email))
            throw new Error("incorrect email");
    }
    controller(data) {
        try {
            this.middleware(data);
            return this.service(data);
        }
        catch (error) {
            return error.message;
        }
    }
    service(data) {
        return this.repository(data);
    }
    repository(data) {
        const arrDB = [
            { id: 1, email: "Test1", pws: "test" },
            { id: 2, email: "Test2", pws: "test" },
            { id: 3, email: "Test.t@gmail.com", pws: "test" },
        ];
        const filtered = arrDB.filter((el) => el.email !== data.email);
        filtered.length === arrDB.length
            ? arrDB.push({ id: arrDB.length + 1, ...data })
            : console.log("email already exists");
        return arrDB;
    }
}
const data = JSON.parse(`{ "email": "Test.t@gmail.com", "pws": "test" }`);
const serverPost = new ServerPost();
const res = serverPost.controller(data);
console.log(res);
