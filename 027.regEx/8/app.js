// Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

// const str = "123!";
// const str = "abcABC";
const str = "!12abcABC";

// function doStrLetters(str_) {
//   try {
//     const regex = /[A-Za-z]/gm;
//     const newStr = str_.match(regex);

//     if (newStr === null) throw new Error("string has no letters");
//     if (newStr.length == str_.length) throw new Error("original string length has not changed");
//     return true;
//   } catch (error) {
//     return error.message;
//   }
// }

function doStrLetters(str_) {
  try {
    let strLetters = "";

    for (let i = 0; i < str_.length; i++) {
      if (/^[A-Za-z]$/gm.test(str_[i])) {
        strLetters += str_[i];
      }
    }

    if (strLetters.length === str_.length) throw new Error("original string length has not changed");
    return true;
  } catch (error) {
    return error.message;
  }
}

const result = doStrLetters(str);
console.log(result);
