// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE

const obj = {
  name: "User",
  age: 20,
  id: 1234,
};

(function (obj_) {
  let count = 0;

  for (let key in obj_) {
    count++;
  }

  console.log(count);
})(obj);
