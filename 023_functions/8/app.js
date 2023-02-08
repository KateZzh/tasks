// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ["a", "b", "  ", "c"];

function checkArrStr(arr_) {
    let countNum = 0;
  
    for (let i = 0; i < arr_.length; i++) {
      if (isNaN(arr_[i])) {
  console.log(true);
      } else {
        console.log(false);
      }
    }
  
  
  }
  checkArrStr(arr);

// function checkArrStr(arr_) {
//   let countNum = 0;

//   for (let i = 0; i < arr_.length; i++) {
//     if (isNaN(arr_[i])) {
//       continue;
//     } else {
//       countNum++;
//     }
//   }

//   if (countNum > 0) {
//     return false;
//   } else return true;
// }

//   const res = arr_.every(function (el) {
//     if (isNaN(el)) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return res;

// resArrStr = checkArrStr(arr);
// console.log(resArrStr);

// function sumArrStr(arr_) {
//   let newArr = "";
//   for (let i = 0; i < arr_.length; i++) {
//     if (resArrStr === true) {
//       newArr += arr_[i];
//     } else {
//       console.log("error");
//       break;
//     }
//   }
//   return newArr;
// }

// const result = sumArrStr(arr);
// console.log(result);




