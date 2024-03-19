// Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.

const calculateFactorial = (n: any): number => {
  try {
    if (typeof n !== 'number') throw new Error('not a number');
    if (n === 0) throw new Error('zero');
    if (n < 0) throw new Error('negative number');

    let res = 1;

    for (let i = 1; i <= n; i++) {
      res *= i;
    }

    return res;
  } catch (error: any) {
    return error.message;
  }
};

describe('test', () => {
  test('', () => {
    expect(calculateFactorial(3)).toBe(6);
  });

  test('', () => {
    expect(calculateFactorial('sd')).toBe('not a number');
  });

  test('', () => {
    expect(calculateFactorial('')).toBe('not a number');
  });

  test('', () => {
    expect(calculateFactorial(0)).toBe('zero');
  });

  test('', () => {
    expect(calculateFactorial(-1)).toBe('negative number');
  });
});
