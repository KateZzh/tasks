// Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки

const str = "hello, how are you?";

function findLetter(str_) {
  let count = 0;
  let letter = "o";

  for (let i = 0; i < str.length; i++) {
    str_[i] === letter ? count++ : null;
  }
  return count;
}

let result = findLetter(str);
console.log(result);
