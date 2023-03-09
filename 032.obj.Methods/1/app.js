// На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае

const str = "a";
const obj = {
  id: 1,
  test: "ggg",
  a: "12a",
};

const bool = obj.hasOwnProperty(str);
console.log(bool);
