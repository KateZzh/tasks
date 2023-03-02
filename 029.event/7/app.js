// Записать в результат удвоенное значение инпута. Добавить проверки

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  try {
    const inp = document.querySelector("input");
    const div = document.querySelector("div");

    if (inp.value === "") throw new Error("empty");
    if (isNaN(inp.value)) throw new Error("not number");
    div.innerHTML = "Результат: " + inp.value ** 2;
  } catch (error) {
    alert(error.message);
  }
});
