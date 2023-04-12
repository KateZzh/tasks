// По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

document.querySelector("button").addEventListener("click", () => {
  const inp1 = document.querySelector(".inp1");
  const inp2 = document.querySelector(".inp2");

  let temp1 = [];
  let temp2 = [];

  try {
    for (let i = 0; i < inp2.value.length; i++) {
      if (inp1.value.includes(inp2.value[i])) temp2 += inp2.value[i];
    }

    for (let i = 0; i < inp1.value.length; i++) {
      if (inp2.value.includes(inp1.value[i])) temp1 += inp1.value[i];
    }

    if (temp1.length === temp2.length && temp2.length === inp2.value.length) {
      alert(true);
    } else alert(false);
  } catch (error) {
    alert(error.message);
  }
});
