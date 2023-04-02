// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки

function isValid(num_) {
  if (num_ === 0) throw new Error("empty");
}

function getNumberKeys(obj_) {
  try {
    const num = Object.values(obj_).length;

    isValid(num);

    return num;
  } catch (error) {
    return error.message;
  }
}

const obj = {
  id: 1,
  name: "Kate",
  surname: "Zh",
};

const NumberKeys = getNumberKeys(obj);
console.log(NumberKeys);
