// Найти значение массива, повторяющееся в нем наибольшее количество раз

const arr = ["Hi", "Hey", "Hey", "Hey", "Hello", "Hello", "Hey"];
let obj = {};


for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]] += 1;
  } else {
    obj[arr[i]] = 1;
  }
}

let arrValue = [];

for (let key in obj) {
  arrValue.push(obj[key]);
}

let maxValue = arrValue[0];
for (let i = 0; i < arrValue.length; i++) {
  if (arrValue[i] > maxValue) {
    maxValue = arrValue[i];
  }
}
console.log(maxValue);

for (let key in obj) {
  if (obj[key] === maxValue) {
    console.log(key);
    break;
  }
}

// let max = arrValue[0];
// for (let i = 0; i < arrValue.length; i++) {
//   if (max > arrValue[i]) {
//     continue;
//   } else {
//     max = arrValue[i];
//   }
// }
