// Напишите функцию doubleArrayElements, реализованную в классе A. Функция
// должна принимать массив чисел в качестве аргумента и возвращать новый
// массив, в котором каждый элемент удвоен. Используйте разные циклы (for, for of,
// while, do while, forEach, map) для решения задачи.

// class A {
//   doubleArrayElements(arr) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//       newArr.push(arr[i] * 2);
//     }

//     return newArr;
//   }
// }

// class A {
//   doubleArrayElements(arr) {
//     let newArr = [];

//     for (let el of arr) {
//       newArr.push(el * 2);
//     }

//     return newArr;
//   }
// }

// class A {
//   doubleArrayElements(arr) {
//     let newArr = [];
//     let i = 0;

//     do {
//       newArr.push(arr[i] * 2);

//       i++;
//     } while (i < arr.length);

//     return newArr;
//   }
// }

// class A {
//   doubleArrayElements(arr) {
//     let newArr = [];
//     let i = 0;

//     while (i < arr.length) {
//       newArr.push(arr[i] * 2);

//       i++;
//     }

//     return newArr;
//   }
// }

// class A {
//   doubleArrayElements(arr) {
//     let newArr = [];

//     arr.forEach((el) => newArr.push(el * 2));

//     return newArr
//   }
// }

class A {
  doubleArrayElements = (arr) => arr.map((el) => el * 2);
}

const a = new A();

console.log(a.doubleArrayElements([1, 2, 3, 4]));
