// Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.

const isPalindrome = (word: any): boolean => {
  try {
    if (!word) throw new Error('empty');
    if (!isNaN(word)) throw new Error('this number');

    return word === word.split('').reverse().join('');
  } catch (error: any) {
    return error.message;
  }
};

describe('test', () => {
  test('true', () => {
    expect(isPalindrome('zxz')).toBeTruthy();
  });

  test('false', () => {
    expect(isPalindrome('zxa')).toBeFalsy();
  });

  test('', () => {
    expect(isPalindrome('')).toBe('empty');
  });

  test('', () => {
    expect(isPalindrome('1')).toBe('this number');
  });
});
