// Напишите функцию sieveOfEratosthenes, которая принимает число n и возвращает
// массив всех чисел до n.

// const sieveOfEratosthenes = (n) => {
//   const arr = [];

//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }

//   return arr;
// };

const sieveOfEratosthenes = (n) => [...Array(n + 1).keys()];

console.log(sieveOfEratosthenes(5));
