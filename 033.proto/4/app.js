// По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
// CamelCase (примерСтрокиВCamelCase )

document.querySelector("button").addEventListener("click", () => {
  try {
    const inp = document.querySelector("input");
    const div = document.querySelector("div");
    const arr = [];

    isValid(inp);

    const str = inp.value.trim().toLocaleLowerCase().split(" ");

    const newStr = str.filter((el) => el !== "");

    for (let i = 0; i < newStr.length; i++) {
      arr.push(newStr[i][0].toUpperCase() + newStr[i].slice(1));
    }

    div.innerHTML = arr.join("");

    inp.value = "";
  } catch (error) {
    alert(error.message);
  }
});

function isValid(inp_) {
  if (inp_.value.trim() === "") throw new Error("empty");
  if (!isNaN(inp_.value)) throw new Error("there is no text");
}
