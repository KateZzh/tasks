// Реализуйте класс Word, и функцию isAnagram которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// анаграммами -> true, в противном случае false

class Word {
  checkEvent() {
    document.querySelector("button").addEventListener("click", () => {
      const inp1 = document.querySelector(".inp1");
      const inp2 = document.querySelector(".inp2");
      this.isAnagram(inp1.value, inp2.value);
    });
  }

  isAnagram(inp1, inp2) {
    try {
      let temp1 = inp1.split("").sort().join("");
      let temp2 = inp2.split("").sort().join("");

      temp1 === temp2 ? alert(true) : alert(false);
    } catch (error) {
      alert(error.message);
    }
  }
}

const word = new Word();
word.checkEvent();
