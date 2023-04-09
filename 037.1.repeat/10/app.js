// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом

function isValid(inp_) {
  if (inp_.value === "") throw new Error("empty");
}

function doArray() {
  let arr = [];

  document.querySelector("button").addEventListener("click", () => {
    const inp = document.querySelector("input");
    const div = document.querySelector("div");

    try {
      isValid(inp);

      arr.push(inp.value);
      div.innerHTML = arr;
      div.style = "color: black";

      inp.value = "";
    } catch (error) {
      div.innerHTML = error.message;
      div.style = "color: red";
      inp.value = "";
    }
  });
}

doArray();
