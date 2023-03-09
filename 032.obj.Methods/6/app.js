// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи - автоинкремент (генерируется автоматически от 1 до n). Значение каждого
// ключа – рандомное число от 1 до 100. Вывести каждое значение объекта с
// помощью values

const obj = {};
const n = 6;

function doObj(obj_, n_) {
  for (let i = 0; i < n_; i++) {
    obj_[i] = Math.round(Math.random() * 100);
  }
  return obj_;
}

function showValues(object_) {
  try {
    const values = Object.values(object_);
    return values;
  } catch (error) {
    return error.message;
  }
}

const object = doObj(obj, n);
const values = showValues(object);
console.log(values);
