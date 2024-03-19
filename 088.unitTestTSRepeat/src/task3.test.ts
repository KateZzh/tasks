// Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.

const capitalizeString = (str: any): string => {
  try {
    if (!str) throw new Error('empty');
    if (typeof str !== 'string') throw new Error('not a string');

    return str.split(' ').map((el) => el[0].toUpperCase() + el.slice(1)).join(' ');
  } catch (error: any) {
    return error.message;
  }
};

describe('test', () => {
  test('', () => {
    expect(capitalizeString('have a good day!')).toBe('Have A Good Day!');
  });

  test('', () => {
    expect(capitalizeString(123)).toBe('not a string');
  });

  test('', () => {
    expect(capitalizeString('')).toBe('empty');
  });

  test('', () => {
    expect(capitalizeString(true)).toBe('not a string');
  });
});
