// Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование

function f12(a, b?: number) {
  if (b) return a + b;
  return (b: number) => {
    return a + b;
  };
}

console.log(f12(2)(3));
console.log(f12(2, 3));

// function f12<T>(a: T) {
//   return (b: T) => {
//     if (typeof a === "number" && typeof b === "number") return a + b;
//   };
// }

// const res12: number = f12<number>(2)(3);

// console.log(res12);
