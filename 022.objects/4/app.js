// На входе статичный объект. Необходимо вывести все четные значения объекта.

const obj = {
  test1: 1,
  test2: 2,
  test3: 3,
  test4: 4,
};

for (let key in obj) {
  if (obj[key] % 2 === 0) {
    console.log(obj[key]);
  }
}
