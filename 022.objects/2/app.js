// На входе статичный объект. Необходимо вывести все числовые ключи.

const obj = {
  1: "test1",
  2: "test2",
  test3: 3,
};

for (let key in obj) {
  if (!isNaN(key)) {
    console.log(key);
  }
}
