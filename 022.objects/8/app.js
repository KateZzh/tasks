// На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение)

const obj = {
  name: "xoxo",
  age: 22,
  test1: 22,
  test2: 22,
};

let result = 0;

for (let key in obj) {
  if (obj[key]) {
    result++;
  }
}
console.log(result);
