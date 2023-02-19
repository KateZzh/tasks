// Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае

const email = prompt();
const obj = {};

function checkEmail(email_) {
  obj.email = email_;
  if (
    (email_.includes("@") && email_.includes(".ru")) || email_.includes(".com")) {
    obj.active = "true";
  } else {
    obj.active = "false";
  }
  return obj;
}

const result = checkEmail(email);
console.log(result);
