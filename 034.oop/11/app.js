// Дополнить класс Validator. Добавить метод isPhone для проверки на номер
// телефона.

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
//       if (!/^([0-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.(19[0-9]|20[0-9]{2})$/gm.test(date))
//         throw new Error(false);
//       return true;
//     } catch (er) {
//       return er.message;
//     }
//   }

//   isPhone(phone) {
//     try {
//       if (!/^(\+375|80|375)(44|29|33|25)[0-9]{7,7}$/gm.test(phone))
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
// const boolPhone = validator.isPhone("+375291234567");

// console.log(boolEmail);
// console.log(boolURL);
// console.log(boolDate);
// console.log(boolPhone);


class Validator {
  str;
  url;
  date;
  phone;

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

    isPhone() {
    try {
      if (!/^(\+375|80|375)(44|29|33|25)[0-9]{7,7}$/gm.test(this.phone))
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
validator.phone = "+375291234567";

const boolEmail = validator.isEmail();
console.log(boolEmail);

const boolURL = validator.isURL();
console.log(boolURL);

const boolDate = validator.isDate();
console.log(boolDate);

const boolPhone = validator.isPhone();
console.log(boolPhone);
