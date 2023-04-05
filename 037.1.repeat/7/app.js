// Вывести в строчку все вводимые значения через инпут в виде массива, а также
// все удвоенные значения данного массива в div ниже. Добавить проверку, что
// поле не пустое

function isValid(inp_) {
  if (inp_.value.trim() === "") throw new Error("empty");
}

function doArr() {
  let arr1 = [];
  let arr2 = [];

  document.querySelector("button").addEventListener("click", () => {
    const inp = document.querySelector("input");
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");

    try {
      isValid(inp);

      arr1.push(inp.value);
      arr2.push(inp.value + inp.value);
      
      div1.innerHTML = arr1;
      div2.innerHTML = arr2;

      inp.value = "";
    } catch (error) {
      alert(error.message);
      inp.value = "";
    }
  });
}

doArr();
