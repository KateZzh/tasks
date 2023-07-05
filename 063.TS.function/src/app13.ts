// Реализовать функцию f: при вызове f(1, 2, 3) -> вернет 6, при вызове f(1)(2)(3)(), тоже
// вернет 6. Использовать каррирование

function f13(a, b?: number, c?: number) {
  if (b && c) return a + b + c;

  return (b: number) => {
    return (c: number) => {
      return () => {
        return a + b + c;
      };
    };
  };
}

console.log(f13(1, 2, 3));
console.log(f13(1)(2)(3)());
