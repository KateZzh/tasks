// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0, а также,
// добавить проверку на ввод только чисел. Если проверка true, то вывести в div
// удвоенное значение инпута

function isValid(inp_) {
  if (isNaN(inp_.value)) throw new Error("not a number");
  if (inp_.value <= 0) throw new Error("number <= 0");
}

function main() {
  let arr = [];

  document.querySelector("button").addEventListener("click", () => {
    const inp = document.querySelector("input");
    try {
      const div = document.querySelector("div");

      isValid(inp);

      arr.push(+inp.value * 2);
      div.innerHTML = arr;

      // div.innerHTML = +inp.value * 2;

      inp.value = "";
      inp.style = "border: 1px solid black";
    } catch (error) {
      alert(error.message);
      inp.value = "";
      inp.style = "border: 1px solid red";
    }
  });
}

const result = main();
