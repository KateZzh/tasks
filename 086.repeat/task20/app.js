// Напишите функцию sumOfDigits, которая принимает число и возвращает сумму
// всех его цифр

// const sumOfDigits = (num) => {
//   const str = num.toString();
//   let sum = 0;

//   for (let i = 0; i < str.length; i++) {
//     sum += +str[i];
//   }

//   return sum;
// };

const sumOfDigits = (num) => {
  const arr = num.toString().split('');

  return arr.reduce((sum, el) => sum + +el, 0);
};

console.log(sumOfDigits(123));
