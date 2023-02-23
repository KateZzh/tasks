// На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const email = "ekaterina@mail.ru";

function isValid(email_) {
  try {
    if (!/^[a-zA-Z0-9\-_\.]+@[a-z]{1,9}\.[a-z]{1,9}$/gm.test(email_))
      throw new Error("не подходит");
    return true;
  } catch (error) {
    return error.message;
  }
}

const result = isValid(email);
console.log(result);
