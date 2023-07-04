// Создайте класс StringManipulator, который будет иметь методы reverseString,
// isPalindrome, countVowels. Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics
class StringManipulator {
    reverseString(str1) {
        if (typeof str1 === "string")
            console.log(str1.split("").reverse().join(""));
    }
    isPalindrome(str2) {
        if (typeof str2 === "string")
            console.log(str2 === str2.split("").reverse().join("") ? true : false);
    }
    countVowels(str3) {
        if (typeof str3 === "string") {
            const words = "eauio";
            let count = 0;
            for (let i = 0; i < str3.length; i++) {
                if (words.includes(str3[i]))
                    count++;
            }
            console.log(count);
        }
    }
}
const stringManipulator = new StringManipulator();
stringManipulator.reverseString("hello");
stringManipulator.isPalindrome("anna");
stringManipulator.countVowels("asdfo");
