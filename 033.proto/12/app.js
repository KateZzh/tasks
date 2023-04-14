// Реализуйте функцию, которая будет считать количество своих вызовов

function doCallFunc() {
  let count = 0;
  return () => {
    return ++count;
  };
}

const countCallFunc = doCallFunc();
console.log(countCallFunc());
console.log(countCallFunc());
console.log(countCallFunc());

