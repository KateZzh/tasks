// *Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу.

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  try {
    const inp = document.querySelector(".inp");
    const table = document.querySelector(".table");

    const tr = document.createElement("tr");
    const td = document.createElement("td");

    td.innerHTML = inp.value;
    table.appendChild(tr);
    tr.appendChild(td);

    if (!inp.value.trim()) throw new Error("empty");

    inp.value = "";
  } catch (error) {
    alert(error.message);
  }
});
