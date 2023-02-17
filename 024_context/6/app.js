// Работа с замыканием. Реализуйте функцию, которая будет считать количество
// своих вызовов

// function countCallFunction() {
//   let count = 0;

//   return function (num) {
//     count += num;
//     console.log(count);
//   };
// }

// let getCountCallFunction = countCallFunction();
// getCountCallFunction(1);
// getCountCallFunction(1);
// getCountCallFunction(1);
// getCountCallFunction(1);

function countCallFunction() {
  let count = 0;

  return () => console.log(++count);

}

let getCountCallFunction = countCallFunction();
getCountCallFunction();
getCountCallFunction();
getCountCallFunction();
getCountCallFunction();
