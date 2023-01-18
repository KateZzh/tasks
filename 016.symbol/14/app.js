// На вход подается строка в виде электронной почты. Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true, иначе false

const email = prompt("электронная почта").trim().toLowerCase();

if (email.includes("@") && (email.endsWith(".com") || email.endsWith(".ru"))) {
  console.log(true);
} else console.log(false);
