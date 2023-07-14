// 1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.

function isPalindrome(word: string | number): boolean {
  try {
    if (!word) throw new Error("empty");
    if (typeof word === "number") throw new Error("there are numbers");

    return (
      word.trim().toLocaleLowerCase() ===
      word.trim().toLocaleLowerCase().split("").reverse().join("")
    );
  } catch (error: any) {
    return error.message;
  }
}

// 2. Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.

function calculateFactorial(n: any): number {
  try {
    if (!n) throw new Error("empty");
    if (typeof n != "number") throw new Error("typeError");

    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
  } catch (error: any) {
    return error.message;
  }
}

// 3. Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.

function capitalizeString(str: any): string {
  try {
    if (!str) throw new Error("empty");
    if (typeof str !== "string") throw new Error("TypeError");

    const newStr: string[] = str.split(" ");
    let temp: string = "";

    for (let i = 0; i < newStr.length; i++) {
      temp += newStr[i][0].toUpperCase() + newStr[i].slice(1) + " ";
    }

    return temp.trim();
  } catch (error) {
    return error.message;
  }
}

// 8. Создайте класс StringArray, который имеет свойство array (массив строк) и методы:
// getLongestWord(): string - возвращает самое длинное слово из массива.
// getUniqueWords(): string[] - возвращает массив уникальных слов из массива.

class StringArray {
  array: string[] = ["hello", "hey", "hi", "hi", "hey"];

  getLongestWord(): string {
    try {
      if (this.array.length === 0) throw new Error("empty");

      let temp: string = this.array[0];

      for (let i = 1; i < this.array.length; i++) {
        if (temp.length < this.array[i].length) temp = this.array[i];
      }

      return temp;
    } catch (error) {
      return error.message;
    }
  }

  getUniqueWords(): string[] {
    try {
      if (this.array.length === 0) throw new Error("empty");

      let temp: string[] = [this.array[0]];

      for (let i = 1; i < this.array.length; i++) {
        if (!temp.includes(this.array[i])) temp.push(this.array[i]);
      }

      return temp;
    } catch (error) {
      return error.message;
    }
  }
}

// 9. Создайте класс NumberArray, который имеет свойство array (массив чисел) и
// методы:
// getSum(): number - возвращает сумму всех чисел в массиве.
// getEvenNumbers(): number[] - возвращает массив только четных чисел из массива.

class NumberArray {
  arr: number[] = [1, 2, 3, 4];

  getSum(): number {
    const sum: number = this.arr.reduce((sum, el) => el + sum, 0);
    return sum;
  }

  getEvenNumbers(): number[] {
    const filtered = this.arr.filter((el) => el % 2 === 0);
    return filtered;
  }
}

export {
  isPalindrome,
  calculateFactorial,
  capitalizeString,
  StringArray,
  NumberArray,
};
