// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте.

const obj = {};
const n = 9;

function doObject(obj_, n) {
  for (let i = 0; i < n; i++) {
    obj_[i] = i;
  }
  return obj_;
}

function findKey(object_) {
  try {
    if (!Object.keys(object_).includes("10")) throw new Error("нет 10");
    return true;
  } catch (error) {
    return error.message;
  }
}

const object = doObject(obj, n);
const res = findKey(object);
console.log(res);
