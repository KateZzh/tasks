// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое

function isValid(inp_) {
  if (inp_.value.trim() === "") throw new Error("empty");
}

function doArr() {
  let arr = [];

  document.querySelector("button").addEventListener("click", () => {
    const inp = document.querySelector("input");
    const div = document.querySelector("div");

    try {
      isValid(inp);

      arr.push(inp.value);
      div.innerHTML = arr;

      inp.value = "";
    } catch (error) {
      alert(error.message);
      inp.value = "";
    }
  });
}

doArr();
