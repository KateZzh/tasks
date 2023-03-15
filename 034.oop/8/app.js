// Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.

// class Validator {
//   isEmail(str) {
//     try {
//       if (!/^[A-Za-z0-9\.]+@[a-z]{1,10}\.[a-z]{1,8}$/gm.test(str))
//         throw new Error(false);
//       return true;
//     } catch (er) {
//       return er.message;
//     }
//   }
// }

// const validator = new Validator();
// const boolEmail = validator.isEmail("ekaterin.pro2@gmail.com");
// console.log(boolEmail);

class Validator {
  str;
  
  isEmail() {
    try {
      if (!/^[A-Za-z0-9\.]+@[a-z]{1,10}\.[a-z]{1,8}$/gm.test(this.str))
        throw new Error(false);
      return true;
    } catch (er) {
      return er.message;
    }
  }
}

const validator = new Validator();
validator.str = "ekaterin.pro2@gmail.com";
const boolEmail = validator.isEmail();
console.log(boolEmail);
