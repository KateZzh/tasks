// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки

const obj = {
  id: 11,
  test: "ggg",
  sos: "sos",
};

const foundCount = (obj_) => {
  try {
    const result = Object.entries(obj_).length;

    if (!result) throw new Error("empty");
    return result;
  } catch (error) {
    return error.message;
  }
};

const result = foundCount(obj);
console.log(result);
