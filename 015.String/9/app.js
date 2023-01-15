// На вход программе подается переменная date, в котрой лежит дата в формате
// 'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)

const date = prompt("введите дату в формате xxxx-xx-xx");

console.log(date.split("-").reverse().join("/"));
