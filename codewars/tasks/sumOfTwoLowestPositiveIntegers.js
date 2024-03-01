// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
// No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.


// const sumTwoSmallestNumbers = (arrNum) => {  
//   arrNum = arrNum.sort((a, b) => a - b);

//   return arrNum[0]+arrNum[1];
// }

const sumTwoSmallestNumbers = (arrNum) => arrNum.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b);

console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));