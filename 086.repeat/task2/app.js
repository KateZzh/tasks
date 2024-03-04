// Найти максимальное и минимальное значение массива. Решить через for, for of,
// while, do while, forEach

// const findMaxAndMinValueArray = (arr) => {
//   let maxVal = arr[0];
//   let minVal = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxVal) {
//       maxVal = arr[i];
//     } else if (arr[i] < minVal) minVal = arr[i];
//   }

//   return `max value: ${maxVal} and min value: ${minVal}`;
// };

// const findMaxAndMinValueArray = (arr) => {
//   let maxVal = arr[0];
//   let minVal = arr[0];

//   for (let el of arr) {
//     if (el > maxVal) {
//       maxVal = el;
//     } else if(el < minVal) minVal = el;
//   }

//   return `max value: ${maxVal} and min value: ${minVal}`;
// };

// const findMaxAndMinValueArray = (arr) => {
//   let maxVal = arr[0];
//   let minVal = arr[0];
//   let i = 1;

//   while (i < arr.length) {
//     if (arr[i] > maxVal) {
//       maxVal = arr[i];
//     } else if (arr[i] < minVal) minVal = arr[i];

//     i++;
//   }

//   return `max value: ${maxVal} and min value: ${minVal}`;
// };

// const findMaxAndMinValueArray = (arr) => {
//   let maxVal = arr[0];
//   let minVal = arr[0];
//   let i = 1;

//   do {
//     if (arr[i] > maxVal) {
//       maxVal = arr[i];
//     } else if (arr[i] < minVal) minVal = arr[i];

//     i++;
//   } while (i < arr.length);

//   return `max value: ${maxVal} and min value: ${minVal}`;
// };

const findMaxAndMinValueArray = (arr) => {
  let maxVal = arr[0];
  let minVal = arr[0];

  arr.forEach((el) => {
    if (el > maxVal) {
      maxVal = el;
    } else if (el < minVal) minVal = el;
  });

  return `max value: ${maxVal} and min value: ${minVal}`;
};

console.log(findMaxAndMinValueArray([20, 2, 30, 5, 25]));
