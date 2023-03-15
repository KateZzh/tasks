// Дополнить класс Validator. Добавить метод isURL для проверки на url.

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

//   isURL(url) {
//     try {
//       if (!/^(http|https)\:\/\/[A-Za-z0-9\.\/]+$/gm.test(url))
//         throw new Error(false);
//       return true;
//     } catch (er) {
//       return er.message;
//     }
//   }
// }

// const validator = new Validator();
// const boolEmail = validator.isEmail("ekaterin.pro2@gmail.com");
// const boolURL = validator.isURL("https://www.google.com/");
// console.log(boolEmail);
// console.log(boolURL);

class Validator {
  str;
  url;

  isEmail() {
    try {
      if (!/^[A-Za-z0-9\.]+@[a-z]{1,10}\.[a-z]{1,8}$/gm.test(this.str))
        throw new Error(false);
      return true;
    } catch (er) {
      return er.message;
    }
  }

  isURL() {
    try {
      if (!/^(http|https)\:\/\/[A-Za-z0-9\.\/]+$/gm.test(this.url))
        throw new Error(false);
      return true;
    } catch (er) {
      return er.message;
    }
  }
}

const validator = new Validator();

validator.str = "ekaterin.pro2@gmail.com";
validator.url = "https://www.google.com/";

const boolEmail = validator.isEmail();
console.log(boolEmail);

const boolURL = validator.isURL();
console.log(boolURL);
