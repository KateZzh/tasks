// По нажатию на кнопку поменять местами значения 2 инпутов.

const btn = document.querySelector("button");
// let flag = true;

// btn.addEventListener("click", function () {
//   const inp1 = document.querySelector(".inp1");
//   const inp2 = document.querySelector(".inp2");

//   if (flag) {
//     inp1.parentNode.insertBefore(inp1, inp2);
//     inp2.parentNode.insertBefore(inp2, inp1);
//     flag = false;
//   } else {
//     inp1.parentNode.insertBefore(inp2, inp1);
//     inp2.parentNode.insertBefore(inp1, inp2);
//     flag = true;
//   }
// });

btn.addEventListener("click", function () {
  let inp1 = document.querySelector(".inp1");
  let inp2 = document.querySelector(".inp2");

  const var1 = inp1.value;
  const var2 = inp2.value;

  inp1.value = var2;
  inp2.value = var1;
});
