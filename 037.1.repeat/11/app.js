// Реализуйте класс WordString, который содержит: конструктор со входной строкой;
// метод ReverseString(). Ваша задача перевернуть исходную строку

// class WordString {
//   constructor(str) {
//     this.str = str;
//   }

//   ReverseString() {
//     const rev = this.str.split("").reverse().join("");
//     return rev;
//   }
// }

// const wordString = new WordString("lalala");
// const res = wordString.ReverseString();
// console.log(res);

class WordString {
  str;

  setStr = (str) => (this.str = str);
  getStr = () => this.str;

  ReverseString() {
    const rev = this.str.split("").reverse().join("");
    return rev;
  }
}

const wordString = new WordString();
wordString.setStr("lalala");

const res = wordString.ReverseString();
console.log(res);
