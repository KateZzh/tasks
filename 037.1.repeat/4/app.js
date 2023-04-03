// На входе статичный объект. Написать функцию на формирование массива
// значений данного объекта

const obj = {
  id: 1,
  name: "Kate",
  surname: "Zh",
};

function doArr(obj_) {
 let arr = Object.values(obj_);
  console.log(arr);
}

doArr(obj);
