// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

const arr = [1, 2, 3, 4, 5, "1", "a"];

// function declaration

// function checkArr(arr_) {
//   const result = arr_.every(function (el) {
//     if (!isNaN(el)) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return result;
// }
// const resCheckArr = checkArr(arr);
// console.log(resCheckArr);

// function sumArr(arr_) {
//   const result = arr_.reduce(function (sum, el) {
//     if (resCheckArr === true) {
//       return sum + +el;
//     } else {
//       return "error";
//     }
//   }, 0);
//   return result;
// }

// const res = sumArr(arr);
// console.log(res);

// function expression

// const checkArr = function (arr_) {
//   const result = arr_.every(function (el) {
//     if (!isNaN(el)) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return result;
// };
// const resCheckArr = checkArr(arr);
// console.log(resCheckArr);

// const sumArr = function (arr_) {
//   const result = arr_.reduce(function (sum, el) {
//     if (resCheckArr === true) {
//       return sum + +el;
//     } else {
//       return "error";
//     }
//   }, 0);
//   return result;
// };
// const res = sumArr(arr);
// console.log(res);

// function arrow

const checkArr = (arr_) => {
  const result = arr_.every(function (el) {
    if (!isNaN(el)) {
      return true;
    } else {
      return false;
    }
  });
  return result;
};

const resCheckArr = checkArr(arr);
console.log(resCheckArr);

const sumArr = (arr_) => {
  const result = arr_.reduce(function (sum, el) {
    if (resCheckArr === true) {
      return sum + +el;
    } else {
      return "error";
    }
  }, 0);
  return result;
};

const res = sumArr(arr);
console.log(res);

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (!isNaN(arr[i])) {
//     sum += +arr[i];
//   } else {
//     break;
//   }
// }
// console.log(sum);
