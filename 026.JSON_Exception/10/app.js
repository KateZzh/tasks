// На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

const email = "ekaterin.pro2@gmail.com";

function isValid(email_) {
  try {
    if (!email_.includes("@")) throw new Error("this is not mail");
    return true;
  } catch (error) {
    return error.message;
  }
}

const result = isValid(email);
console.log(result);
