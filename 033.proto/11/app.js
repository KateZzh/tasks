// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const obj = {
  id: 111,
  name: "Kate",
  surname: "Zh",
  number: 123456,
};

(function (obj_) {
  try {
    let newObj = {};

    for (let key in obj_) {
      if (typeof obj_[key] === "number") newObj[key] = obj_[key];
    }

    console.log(newObj);
  } catch (error) {
    console.log(error.message);
  }
})(obj);
