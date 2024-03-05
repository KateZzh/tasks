// Напишите функцию anagrams, которая проверяет являются ли 2 переменные
// анаграммами. Анаграммы – это слова, составленные из одного набора букв.

const anagrams = (str1, str2) => {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};

console.log(anagrams('listen', 'silent'));
console.log(anagrams('listenn', 'silent'));
console.log(anagrams('asa', 'asd'));
