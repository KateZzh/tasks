// На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values

const obj = {
  id: 12,
  test: "gg",
  aa: "vv",
};

const str = "vv";

const findStr = (obj_, str_) => {
  try {
    const arr = Object.values(obj_);
    if (!arr.includes(str_)) throw new Error("в объекте нет значения str");
    return true;
  } catch (error) {
    return error.message;
  }
};

const bool = findStr(obj, str);
console.log(bool);
