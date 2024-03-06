// Напишите функцию checkExistsElement, реализованную в классе B Эта функция
// должна принимать массив и элемент в качестве аргументов и возвращать true,
// если элемент присутствует в массиве, и false в противном случае. Решите задачу,
// используя разные циклы (for, for of, while, do while, forEach, some).

// class B {
//   checkExistsElement = (arr, el) => {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === el) return true;
//     }

//     return false;
//   };
// }

// class B {
//   checkExistsElement = (arr, el) => {
//     for (let elem of arr) {
//       if (elem === el) return true;
//     }

//     return false;
//   };
// }

// class B {
//   checkExistsElement = (arr, el) => {
//     let i = 0;

//     while (i < arr.length) {
//       if (arr[i] === el) return true;

//       i++;
//     }

//     return false;
//   };
// }

// class B {
//   checkExistsElement = (arr, el) => {
//     let i = 0;

//     do {
//       if (arr[i] === el) return true;

//       i++;
//     } while (i < arr.length);

//     return false;
//   };
// }

// class B {
//   checkExistsElement = (arr, val) => {
//     let bool = false;

//     arr.forEach((el) => (el === val ? (bool = true) : null));

//     return bool;
//   };
// }

class B {
  checkExistsElement = (arr, val) => arr.some((el) => el === val);
}

const b = new B();

console.log(b.checkExistsElement([1, 2, 3, 4, 5], 3));
console.log(b.checkExistsElement([1, 2, 3, 4, 5], 'v'));
console.log(b.checkExistsElement([1, 2, 3, 4, 5], 6));
