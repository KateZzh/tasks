// Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
// данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
// сервер» для последующей записи в массив репозитория класса Server

class Client {
  doRegistration() {
    document.querySelector("button").addEventListener("click", () => {
      const email = document.querySelector(".email");
      const pwd = document.querySelector(".pwd");
      try {
        const dataForServer = {
          email: email.value,
          pwd: pwd.value,
        };

        console.log(dataForServer);
      } catch (error) {
        alert(error.message);
      }
    });
  }
}

const client = new Client();
client.doRegistration();
