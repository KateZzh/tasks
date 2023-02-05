// На входе статичный объект. Необходимо числовые значения удвоить на выходе.

const obj = {
  test1: 1,
  test2: 2,
  test3: 3,
  test4: 4,
  test5: "as",
};

const arr = [];
for (let key in obj) {
  if (!isNaN(obj[key])) {
    arr.push(obj[key] * 2);
  }
}
console.log(arr);
