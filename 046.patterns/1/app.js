// Посчитать количество гласных и согласных в строке

const vowel = "aeiou";

document.querySelector("button").addEventListener("click", () => {
  const inp = document.querySelector("input");
  const div = document.querySelector("div");

  let count = 0;

  for (let i = 0; i < inp.value.length; i++) {
    if (vowel.includes(inp.value[i])) count += 1;
  }

  div.innerHTML = `количество гласных: ${count}, количество согласных: ${
    inp.value.length - count
  }`;
});
