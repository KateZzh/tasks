// Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая: controller -> service -> repository, где:
// Задание:
// Необходимо вывести в консоль массив из репозитория

interface iServerGetAll{
  controller(): number[];
  service(): number[];
  repository(): number[];
}

class ServerGetAll implements iServerGetAll {
  controller(): number[] {
    return this.service();
  }

  service(): number[] {
    return this.repository();
  }

  repository(): number[] {
    const arrNum12: number[] = [1, 2, 3, 4];

    return arrNum12;
  }
}

const serverGetAll = new ServerGetAll();

console.log(serverGetAll.controller());

