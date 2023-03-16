// Реализуйте класс Singer, который будет иметь следующие свойства: name,
// surname. Также класс должен иметь метод getAutograph, который будет выводить
// “{name} {surname), с наилучшими пожеланиями”.

// class Singer {
//   getAutograph(name, surname) {
//     try {
//       return `${name} ${surname}, с наилучшими пожеланиями`;
//     } catch (error) {
//       return error.message;
//     }
//   }
// }

// const singer = new Singer();
// const res = singer.getAutograph("Kate", "Zh");
// console.log(res);


// class Singer {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   getAutograph() {
//     return `${this.name} ${this.surname}, с наилучшими пожеланиями`;
//   }
// }

// const singer = new Singer("Kate", "Zh");
// const res = singer.getAutograph();
// console.log(res);


class Singer {
  name;
  surname;
  getAutograph() {
    try {
      return `${this.name} ${this.surname}, с наилучшими пожеланиями`;
    } catch (error) {
      return error.message;
    }
  }
}

const singer = new Singer();
singer.name = "Kate";
singer.surname = "Zh";
const res = singer.getAutograph();
console.log(res);
