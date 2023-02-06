// На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив

const obj = {
  test1: "",
  test2: "",
  test3: "",
  test4: "",
  test5: "",
};
let arr = [];

for (let key in obj) {
  let pr = prompt(`введите ${key}`);
  obj[key] = pr;
  arr.push(pr);
}
console.log(obj);
console.log(arr);
