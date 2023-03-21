// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на почту. Вывести true, если провека успешна

class DomHtml {
  middleware() {
    document.querySelector("button").addEventListener("click", () => {
      try {
        const inp = document.querySelector("input");

        if (!/^[A-Za-z0-9\.\-]+@[a-z]{1,12}\.[a-z]{2,8}$/gm.test(inp.value))
          throw new Error("email incorrect");

        alert(true);
      } catch (error) {
        alert(error.message);
      }
    });
  }
}

const domHtml = new DomHtml();
domHtml.middleware();
