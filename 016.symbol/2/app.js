// На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести
// true, если совпадение есть, в противном случае false

let str1 = prompt("введите 1 строку").trim();
let str2 = prompt("введите 2 строку").trim();

if (str1.includes(str2)) console.log(true);
else console.log(false);
