// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

const url = prompt("введите ссылку").trim().toLowerCase();

if (
  url.startsWith("http") &&
  url.includes("/") &&
  (url.endsWith(".com") || url.endsWith(".ru"))
) {
  console.log(true);
} else {
  console.log(false);
}

console.log(
  url.startsWith("http") &&
    url.includes("/") &&
    (url.endsWith(".com") || url.endsWith(".ru"))
    ? true
    : false
);
