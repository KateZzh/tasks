// Напишите функцию primeFactors, которая принимает число и возвращает массив
// всех его простых множителей.

const primeFactors = (num) => {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) arr.push(i);
  }

  return arr;
};

console.log(primeFactors(48));
