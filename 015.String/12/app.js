// Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!'

const date = prompt("введите дату в формате х-х-х").trim().toLowerCase();

console.log(date.replaceAll("-", "!"));
