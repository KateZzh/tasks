// Подается строка из нескольких слов. Необходимо добавить тире между словами

let str = prompt("введите строку").trim();

console.log(str.replaceAll(" ", "-"));
console.log(str.split(" ").join("-"));
