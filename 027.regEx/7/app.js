// На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать.
// Пароль должен содержать:
// • Буквы в UPPER регистре
// • Буквы в LOWER регистре
// • Числа
// • Специальные символы
// • Длина не менее 8 символов

const password = "!AAAbbb12";

function isValid(password_) {
  try {
    if (!/^(\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\-|\=){1,}[A-Z]{1,}[a-z]{1,}\d{1,}$/gm.test(password_)) throw new Error("the password is not secure");
    if (password_.length < 8) throw new Error("length less than 8 characters");
    return "true";
  } catch (error) {
    return error.message;
  }
}

const result = isValid(password);
console.log(result);
