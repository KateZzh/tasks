// Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email, pwd: pwd}

class Client {
  isValid(email, psw) {
    if (!/^[A-Za-z0-9\.]+\@[a-z]{1,12}\.[a-z]{2,10}$/gm.test(email))
      throw new Error("Неверный формат электронной почты");
    if (psw.length < 8)
      throw new Error("Пароль не должен быть менее 8 символов");
  }

  sendRequest() {
    document.querySelector("button").addEventListener("click", () => {
      try {
        const email = document.querySelector(".email");
        const psw = document.querySelector(".psw");
        this.isValid(email.value, psw.value);
        const div = document.querySelector("div");
        div.innerHTML = JSON.stringify({ email: email.value, pwd: psw.value });
      } catch (error) {
        alert(error.message);
      }
    });
  }
}

const client = new Client();
client.sendRequest();
