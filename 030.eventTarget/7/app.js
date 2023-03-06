// *Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу.

const btn = document.querySelector(".btn");
const table = document.querySelector(".table");

btn.addEventListener("click", function () {
  try {
    const inp = document.querySelector(".inp");

    if (!inp.value.trim()) throw new Error("empty");

    const td = document.createElement("td");
    td.textContent = inp.value;
    table.appendChild(document.createElement("tr"));
    table.appendChild(td);

    inp.value = "";
  } catch (error) {
    alert(error.message);
  }
});
