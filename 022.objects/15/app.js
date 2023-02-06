// На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное

const obj = {};
const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    obj[arr[i]] = true;
  } else {
    obj[arr[i]] = false;
  }
}

console.log(obj);
