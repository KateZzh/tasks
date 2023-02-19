// Напишите функцию, которая принимает строку состоящую из нескольких слов.
// Каждое нечетное слово строки функция должна преобразовать в нижний регистр,
// все четные слова, соответственно, в верхний
// happy new year -> happy NEW year

const words = "how are you?".split(" ");

function showResult(words_) {
  let newWords = words_.map(function (el, i) {
    if (i % 2 == 0) {
      return el.toUpperCase();
    } else return el.toLowerCase();
  });
  return newWords;
}

const result = showResult(words);
console.log(result);

// function showResult(words_) {
//   let newWords = words_.map(function (el, i) {
//     if (i % 2 == 0) {
//       return el.toUpperCase();
//     } else return el.toLowerCase();
//   });
//   console.log(newWords);
// }
// showResult(words);
