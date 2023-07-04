// Создайте класс StringManipulator, который будет иметь методы reverseString,
// isPalindrome, countVowels. Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics

class StringManipulator {
  reverseString<MyType>(str1: MyType) {
    if (typeof str1 === "string")
      console.log(str1.split("").reverse().join(""));
  }

  isPalindrome<MyType>(str2: MyType) {
    if (typeof str2 === "string")
      console.log(str2 === str2.split("").reverse().join("") ? true : false);
  }

  countVowels<MyType>(str3: MyType) {
    if (typeof str3 === "string") {
      const words: string = "eauio";
      let count: number = 0;

      for (let i = 0; i < str3.length; i++) {
        if (words.includes(str3[i])) count++;
      }

      console.log(count);
    }
  }
}

const stringManipulator = new StringManipulator();

stringManipulator.reverseString<string>("hello");
stringManipulator.isPalindrome<string>("anna");
stringManipulator.countVowels<string>("asdfo");
