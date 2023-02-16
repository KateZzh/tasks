// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const obj = {
  1: "xoxo",
  2: 1111,
  3: 505,
  4: "hey",
  5: 123,
};

(function (obj_) {
  let newObj = {};

  for (let key in obj_) {
    if (!isNaN(obj[key])) {
      newObj[key] = obj_[key];
    }
  }

  console.log(newObj);
})(obj);
