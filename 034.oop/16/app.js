// 6. Реализуйте класс, который находит полное число метров по заданному числу сантиметров.
// Добавьтепроверкуна вводтолькочисел.
// Входные: 345 →Результат: 3 метров
// Входные: 100 → Результат: 1 метр
// Входные: 99 →Результат: 0 метров
// Входные: 750 →Результат: 7 метров
// Входные: 10 →Результат: 0 метров
// Входные: hi → Результат: Вы ввелине число!

// class Calculation {
//     findMetre(n) {
//         if (typeof n !== 'number') return 'You did not enter a number!';
//         const res = Math.floor(n / 100);
//         return `Результат: ${res} метров`;
//     }
// }

// const calculation = new Calculation();
// console.log(calculation.findMetre(345));
// console.log(calculation.findMetre(100));
// console.log(calculation.findMetre(99));
// console.log(calculation.findMetre(750));
// console.log(calculation.findMetre('jj'));

// 7. Пользователь вводит три числа: a, b и c. Напишите класс, которая определяет, является ли тройка
//  чиселсторонамитреугольника. Для этого следует проверитьследующиеусловия:
//  1.
//  Суммадвухсторондолжнабытьбольшетретьейстороны.(a+b>c,a+c>b,b+c>a)
//  2. Еслиэтотак,тодалееопределить,какойтиптреугольникаможнопостроить:
//  • Есливсетристороныравны,выведитеРавностороннийтреугольник.
//  • Еслидвестороныравны,выведитеРавнобедренныйтреугольник.
//  • Есливсетристороныразные,выведитеРазностороннийтреугольник.
//  3. Если треугольник не существует (условие не выполняется), выведите Треугольник не
//  существует.
//  Добавьтепроверкуна вводтолькочисел.
//  Входные: 5, 5, 5 → Результат: Равностороннийтреугольник
//  Входные: 3, 4, 5 → Результат: Разностороннийтреугольник
//  Входные: 6, 6, 10 → Результат: Равнобедренный треугольник
//  Входные: 1, 2, 3 → Результат: Треугольникне существует
//  Входные: 10, 15, 25 → Результат: Треугольник не существует
//  Входные: 7, 7, 14 → Результат: Треугольник не существует

// class Triangle {
//     show(a, b, c) {
//         if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') return 'error';
//         if (a + b <= c || a + c <= b || b + c <= a) return 'Треугольник не существует';
//         if (a === b && a === c) return 'Равносторонний треугольник';
//         if (a === b || a === c || b === c) return 'Равнобедренный треугольник';
//         if (a !== b && a !== c && b !== c) return 'Разносторонний треугольник';
//     }
// }

// const triangle = new Triangle();
// console.log(triangle.show(5, 5, 5));
// console.log(triangle.show(3, 4, 5));
// console.log(triangle.show(6, 6, 10));
// console.log(triangle.show(1, 2, 3));
// console.log(triangle.show(10, 15, 25));
// console.log(triangle.show(7, 7, 14));
// console.log(triangle.show(7, 7, 'd'));

// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является
// то false.

// /^[\w\.\-\!]+@[a-z]{2,10}\.[a-z]{2,8}/gm

// class Validator {
//     isEmail(str) {
//         return /^[\w\.\-\!]+@[a-z]{2,10}\.[a-z]{2,8}/gm.test(str);
//     }
// }

// const validator = new Validator()
// console.log(validator.isEmail('dsds'));
// console.log(validator.isEmail('ffsv.oof@gmail.com'));

// 9. Реализуйте класс для пересчета временного интервала, заданного в минутах, в величину,
// выраженнуювчасахиминутах.
// Входные: 150 минут →Результат: 2 часа 30 минут
// Входные: 240 минут→Результат:4 часа 0минут

// class Time {
//     show(n) {
//         return `${Math.floor(n / 60)} часа ${n % 60} минут`;
//     }
// }

// const time = new Time();
// console.log(time.show(240));
// console.log(time.show(150));

// 1. Создайте класс Rectangle, который будет иметь свойства width и height. Напишите метод getArea(),
// который возвращает площадь прямоугольника.
// Входные: Rectangle(5, 10) → Результат: 50
// Входные: Rectangle(3, 7) → Результат: 21
// Входные: Rectangle(6, 9) → Результат: 54

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }
// }

// const rectangle = new Rectangle(5, 10);

// console.log(rectangle.getArea());

// 2. Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
// getAverageGrade(), который возвращает средний балл студента.
// Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
// Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
// Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4"

// class Student {
//     constructor(name, age, arr) {
//         this.name = name;
//         this.age = age;
//         this.arr = arr;
//     }

//     getAverageGrade() {
//         const grade = this.arr.reduce((sum, el) => sum + el, 0) / this.arr.length;

//         return `${this.name} (${this.age}) имеет средний балл ${grade}`;
//     }
// }

// const student = new Student('Alice', 20, [5, 4, 5, 3, 4]);
// console.log(student.getAverageGrade());

// 3. Создайте класс Car с параметрами make, model, year. Напишите метод getCarAge(currentYear),
// который возвращает возраст машины.
// Входные: Car("Toyota", "Camry", 2015) → Результат: Возраст машины: 9 лет
// Входные: Car("Honda", "Civic", 2020) → Результат: Возраст машины: 4 года
// Входные: Car("Ford", "Mustang", 1967) → Результат: Возраст машины: 57 лет

// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     getCarAge(currentAge) {
//         const res = currentAge - this.year;

//         return `Возраст машины: ${res} лет`;
//     }
// }

// const car = new Car('Toyota', 'Camry', 2015);
// console.log(car.getCarAge(2024));

// 4. Создайте класс StringRepository, который имеет статичный массив words. Наследуйте от него класс
// FilteredWords, добавив метод getWordsByLength(length), который возвращает только те слова,
// длина которых равна заданному значению.
// Входные:
// const repo = new FilteredWords(["apple", "banana", "kiwi", "plum"]);
// repo.getWordsByLength(5);
// → Результат: ["apple", "plum"]
// Входные:
// const repo = new FilteredWords(["cat", "dog", "elephant", "mouse"]);
// repo.getWordsByLength(3);
// → Результат: ["cat", "dog"]

// class StringRepository {
//     arr = ['cat', 'dog', 'elephant', 'mouse'];
// }

// class FilteredWords extends StringRepository {
//     getWordsByLength(length) {
//         return this.arr.filter((el) => el.length === length);
//     }
// }

// const repo = new FilteredWords();
// const result = repo.getWordsByLength(3);

// console.log(result);

// 5. Создайте класс NumberGenerator с методом generateNumbers(size), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс EvenNumbers, добавив метод getEvenNumbers(size),
// который вызывает generateNumbers(size) и фильтрует только четные числа.
// Входные: EvenNumbers(6).getEvenNumbers() → Результат: [2, 4, 6]
// Входные: EvenNumbers(10).getEvenNumbers() → Результат: [2, 4, 6, 8, 10]
// Входные: EvenNumbers(3).getEvenNumbers() → Результат: [2]

// class NumberGenerator {
//     generateNumbers(size) {
//         const arr = [];

//         for (let i = 1; i <= size; i++) {
//             arr.push(i);
//         }

//         return arr;
//     }
// }

// class EvenNumbers extends NumberGenerator {
//     getEvenNumbers(size) {
//         const arr = this.generateNumbers(size);

//         return arr.filter((el) => el % 2 === 0);
//     }
// }

// const evenNumbers = new EvenNumbers();
// console.log(evenNumbers.getEvenNumbers(10));

// 6. Создайте класс SentenceRepository, который имеет массив строк sentences и метод getSentences(),
// возвращающий этот массив. Наследуйте от него класс LongestSentence, добавив метод
// getLongestSentence(), который возвращает самую длинную строку по количеству символов.
// Входные:
// const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
// repo.getLongestSentence();
// → Результат: "This is a longer sentence"
// Входные:
// const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
// repo.getLongestSentence();
// → Результат: "JavaScript is fun"
// Входные:
// const repo = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"]);
// repo.getLongestSentence();
// → Результат: "A sentence that is quite long"

// class SentenceRepository {
//     constructor(arr) {
//         this.arr = arr;
//     }

//     getSentences() {
//         return this.arr;
//     }
// }

// class LongestSentence extends SentenceRepository {
//     getLongestSentence() {
//         const arr = this.getSentences();

//         return arr.reduce((str, el) => (el.length > str.length) ? str = el : str);
//     }
// }

// const repo = new LongestSentence(['Hello world', 'This is a longer sentence', 'Short']);
// console.log(repo.getLongestSentence());

// 1. Создайте класс Product, который будет иметь свойства name, price и quantity. Напишите метод
// getTotalCost(products), который принимает список продуктов и возвращает общую стоимость всех
// товаров в каталоге.
// Входные: Product("Apple", 2, 5)→ Результат: 10
// Входные: Product("Orange", 3, 4)→ Результат: 12

// class Product {
//     constructor(name, price, quantity) {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     getTotalCost() {
//         return `result: ${this.price * this.quantity}`;
//     }
// }

// const product = new Product('Apple', 2, 5);
// console.log(product.getTotalCost());

// 3. Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
// метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
// массиве. Если общего префикса нет, метод возвращает пустую строку.
// Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
// Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
// Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inter"

// class CommonPrefix {
//     constructor(arr) {
//         this.arr = arr;
//     }

//     findLongestPrefix() {
//         let prefix = '';
//         const minSize = Math.min(...this.arr.map((el) => el.length));

//         for (let i = 0; i < minSize; i++) {
//             const letter = this.arr[0][i];

//             if (!this.arr.every((el) => el[i] === letter)) break;

//             prefix += letter;
//         }

//         return `result: ${prefix}`;
//     }
// }

// const commonPrefix = new CommonPrefix(["interview", "interval", "internet"]);
// console.log(commonPrefix.findLongestPrefix());

// 2. Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
// getAverageGrade(), который возвращает средний балл студента.
// Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
// Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
// Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4«

// class Student {
//     constructor(name, age, arr) {
//         this.name = name;
//         this.age = age;
//         this.arr = arr;
//     }

//     getAverageGrade() {
//         let sum = this.arr.reduce((sum, el) => sum + el, 0);
//         return `${this.name} (${this.age}) имеет средний балл ${sum / this.arr.length}`;
//     }
// }

// const student = new Student('Alice', 20, [5, 4, 5, 3, 4]);
// console.log(student.getAverageGrade());

// 4. Создайте класс TwoSum, который будет принимать массив целых чисел nums и целое число target.
// Реализуйте метод findIndices(), который возвращает индексы двух чисел, сумма которых равна
// target. Гарантируется, что существует ровно одно решение, и вы не можете использовать один и
// тот же элемент дважды.
// Условия:
// • Массив nums содержит только целые числа.
// • Вы можете вернуть индексы в любом порядке.
// • Для каждого набора входных данных существует ровно одно решение.
// Входные: new TwoSum([2, 7, 11, 15], 9) → Результат: [0, 1]
// Объяснение: Поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
// Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]
// Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]

// class TwoSum {
//     constructor(arr, n) {
//         this.arr = arr;
//         this.n = n;
//     }

//     findIndices() {
//         let indexArr = [];

//         for (let i = 0; i < this.arr.length; i++) {
//             let firstEl = this.arr[i];

//             for (let j = i + 1; j < this.arr.length; j++) {
//                 let secondEl = this.arr[j];

//                 if (firstEl + secondEl === this.n) {
//                     indexArr.push(i, j);
//                 }
//             }
//         }

//         return indexArr;
//     }
// }

// const twoSum = new TwoSum([3, 2, 4], 6);
// console.log(twoSum.findIndices());

// 5. Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это число палиндромом.
// Входные: new PalindromeChecker(-121)→ Результат: false
// Входные: new PalindromeChecker(10)→ Результат: false
// Входные: new PalindromeChecker(12321)→ Результат: true

// class Number {
//     constructor(num) {
//         this.num = num;
//     }
// }

// class PalindromeChecker extends Number {
//     checkPalindrom() {
//         let str = this.num.toString();
//         let newStr = str.split('').reverse().join('');

//         return str === newStr;
//     }
// }

// const palindromeChecker = new PalindromeChecker(12321);
// console.log(palindromeChecker.checkPalindrom());

// 6. Создайте родительский класс Number, который будет хранить статичное число. Затем создайте
// дочерний класс SquareRootCalculator, который будет содержать метод calculateSquareRoot(),
// вычисляющий квадратный корень этого числа без использования встроенной функции Math.sqrt().
// Входные: new SquareRootCalculator(16) → Результат: 4
// Входные: new SquareRootCalculator(25) → Результат: 5
// Входные: new SquareRootCalculator(1) → Результат: 1

// class Number {
//     constructor(num) {
//         this.num = num;
//     }
// }

// class SquareRootCalculator extends Number {
//     calculateSquareRoot() {
//         for (let i = 1; i < this.num; i++) {
//             if (i * i === this.num) return i;
//         }
//     }
// }

// const sentenceRepository = new SquareRootCalculator(16);
// console.log(sentenceRepository.calculateSquareRoot());
