// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// function addBinary(a,b) {
//   let sum = a + b;
//   let binary = '';

//   while (sum !== 0) {
//     if(sum % 2 !== 0) {
//       sum = Math.floor(sum / 2);
//       binary += 1;
//     } else {
//       sum /= 2;
//       binary += 0;
//     }
//   }

//   return binary.split('').reverse().join('');
// }

function addBinary(a, b) {
  let sum = a + b;
  let binary = [];

  while (sum !== 0) {
    binary.push(sum % 2);
    sum = Math.floor(sum / 2);
  }

  return binary.reverse().join('');
}

console.log(addBinary(123, 3));
