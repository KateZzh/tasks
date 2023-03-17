// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
//   замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
//   если слова являются анаграммами. Добавить проверки на ввод

class Anagram {
  isValid(str1_, str2_) {
    if (str1_.trim() === "" || str2_.trim() === "")
      throw new Error("one of the strings or 2 strings are empty");
    if (!isNaN(str1_) || !isNaN(str2_))
      throw new Error("one of the strings or 2 strings are numbers");
  }

  checkAnagram(str1, str2) {
    try {
      this.isValid(str1, str2);

      str1.split("").sort().join("") === str2.split("").sort().join("")
        ? console.log(true)
        : console.log(false);
    } catch (error) {
      console.log(error.message);
    }
  }
}

const anagram = new Anagram();
anagram.checkAnagram("study", "dusty");
anagram.checkAnagram(" ", "dusty");
anagram.checkAnagram("5", "dusty");
anagram.checkAnagram("hi", "hey");
