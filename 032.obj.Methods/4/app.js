// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Написать функцию на поиск в объекте только четных ключей.

const obj = {};

function doObject(obj_) {
  for (let i = 0; i < 5; i++) {
    obj_[i] = i;
  }
  return obj_;
}

function fintChetKeys(newObj_) {
  try {
    const arr = Object.keys(newObj_);

    const chetKeys = arr.filter((el) => el % 2 === 0);

    if (!arr.length) throw new Error("empty");
    return chetKeys;
  } catch (error) {
    return error.message;
  }
}

const newObj = doObject(obj);
const res = fintChetKeys(newObj);
console.log(res);
