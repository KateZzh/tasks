// Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки.

class WordString {
  isValid(str) {
    if (!isNaN(str)) throw new Error("it's number");
  }

  reverseString(str) {
    try {
      this.isValid(str);
      const reverse = str.split("").reverse().join("");
      console.log(reverse);
    } catch (error) {
      console.log(error.message);
    }
  }

  upperFirst(str) {
    try {
      this.isValid(str);
      const result = str[0].toUpperCase() + str.slice(1);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  upperEvery(str) {
    try {
      this.isValid(str);
      const arr = str.split(" ");
      let newStr = "";

      for (let i = 0; i < arr.length; i++) {
        newStr += arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
      }
      console.log(newStr);
    } catch {
      console.log(error.message);
    }
  }
}

const wordString = new WordString();
wordString.reverseString("1");
wordString.upperFirst("test");
wordString.upperEvery("hello world");
