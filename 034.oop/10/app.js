// Дополнить класс Validator. Добавить метод isDate для проверки на дату

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

//   isDate(date) {
//     try {
//       if (
//         !/^([0-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.(19[0-9]|20[0-9]{2})$/gm.test(date))
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
// const boolDate = validator.isDate("15.03.2023");
// console.log(boolEmail);
// console.log(boolURL);
// console.log(boolDate);

class Validator {
  str;
  url;
  date;

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

  isDate() {
    try {
      if (
        !/^([0-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.(19[0-9]|20[0-9]{2})$/gm.test(this.date))
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
validator.date = "15.03.2023";

const boolEmail = validator.isEmail();
console.log(boolEmail);

const boolURL = validator.isURL();
console.log(boolURL);

const boolDate = validator.isDate();
console.log(boolDate);
