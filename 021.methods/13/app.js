// На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичная переменная со
// значением javascript. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значение переменной javascript.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

const n = 4;
let arr = [];
const js = "javascript";
let arr2 = [];

for (let i = 0; i < n; i++) {
  let pr = prompt();
  if (isNaN(pr)) {
    arr.push(pr);
  }
}

// arr.forEach(function (el) {
//   if (el.includes(js)) {
//     arr2.push(el);
//   }
// });
// console.log(arr2);

let res = arr.filter(function (el) {
  if (el.includes(js)) {
    return true;
  }
});
console.log(res);
