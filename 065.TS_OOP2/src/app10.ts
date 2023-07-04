// Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
// которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
// Класс Validation является производным по отношению к базовому, родительскому
// Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
// базового класса и записать в переменную используя метод super. Далее
// дополняем переопределенный метод отображением результата в console

interface iPwd {
  showPwd(): string;
}

class Pwd implements iPwd {
  showPwd(): string {
    let pwd: string = "";

    for (let i = 0; i < 8; i++) {
      pwd += Math.round(Math.random() * 9);
    }

    return pwd;
  }
}

class Validation extends Pwd implements Pwd {
  override showPwd(): string {
    const result: string = super.showPwd();

    console.log(result);

    return result.split("").reverse().join("");
  }
}

const pwd = new Pwd();
const validation = new Validation();

console.log(pwd.showPwd());
console.log("//////////");
console.log(validation.showPwd());
