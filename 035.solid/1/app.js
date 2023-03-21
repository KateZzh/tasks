// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide

class DomHtml {
  checkEvent() {
    document.querySelector("button").addEventListener("click", () => {
      const inp1 = document.querySelector(".inp1").value;
      const inp2 = document.querySelector(".inp2").value;

      this.doPlus(inp1, inp2);
      this.doMinus(inp1, inp2);
      this.doMultiply(inp1, inp2);
      this.doDivide(inp1, inp2);
    });
  }

  doPlus(inp1, inp2) {
    const plusOut1 = document.querySelector(".out1");

    plusOut1.innerHTML = `Результат суммы: ${+inp1 + +inp2}`;
  }
  doMinus(inp1, inp2) {
    const minusOut2 = document.querySelector(".out2");

    minusOut2.innerHTML = `Результат разности: ${+inp1 - +inp2}`;
  }
  doMultiply(inp1, inp2) {
    const multiplyOut3 = document.querySelector(".out3");

    multiplyOut3.innerHTML = `Результат произведения: ${+inp1 * +inp2}`;
  }
  doDivide(inp1, inp2) {
    const divideOut4 = document.querySelector(".out4");

    divideOut4.innerHTML = `Результат деления: ${+inp1 / +inp2}`;
  }
}

const domHtml = new DomHtml();
domHtml.checkEvent();