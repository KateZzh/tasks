// На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

const str1 = "onybs".split("").sort();
const str2 = "bonys".split("").sort();

function isAnagram(str1_, str2_) {
  return str1_.join("") === str2_.join("") ? true : false;
}

const result = isAnagram(str1, str2);
console.log(result);
