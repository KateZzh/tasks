// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const password = "123Ba!123";

function generatePassword(password_) {
  let countNumber = 0;
  let countLetterUpper = 0;
  let countLetterLower = 0;

  if (password.length < 8) return "less then 8 letter";

  for (let i = 0; i < password_.length; i++) {
    if (!isNaN(password_[i])) {
      countNumber++;
    } else {
      password_[i] === password_[i].toUpperCase()
        ? countLetterUpper++
        : countLetterLower++;
    }
  }

//   if (password_.length - (countNumber + countLetterLower + countLetterUpper) === 0) return "enter symbol";

  if (countNumber === 0 || countLetterLower === 0 || countLetterUpper === 0) return "reenter the password";

  return true;
}

const result = generatePassword(password);
console.log(result);