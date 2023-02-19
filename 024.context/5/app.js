// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const pass = "A12n!hhhh";

function checkPassword(pass_) {
  let countBigLetter = 0;
  let countLetter = 0;
  let countNumber = 0;
  const symbols = "!@#$%^&*()-+";
  let countSymbol = 0;

  for (let i = 0; i < pass_.length; i++) {
    if (!isNaN(pass_[i])) {
      countNumber++;
    } else if (isNaN(pass_[i])) {
      countLetter++;
    }
  }

  for (let i = 0; i < pass_.length; i++) {
    if (pass_[i] === pass_[i].toUpperCase() && isNaN(pass_[i])) {
      countBigLetter++;
    }
  }

  for (let i = 0; i < pass_.length; i++) {
    if (symbols.includes(pass_[i])) {
      countSymbol++;
    }
  }

  if (
    countBigLetter >= 1 &&
    countNumber > 0 &&
    countLetter > 0 &&
    countSymbol > 0 &&
    countBigLetter - countSymbol > 0 &&
    pass_.length >= 8
  ) {
    return "Пароль является надежным";
  } else return "Пароль не является надежным";
}

const result = checkPassword(pass);
console.log(result);
