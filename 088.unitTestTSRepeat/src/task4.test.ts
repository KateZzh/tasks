// Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
// котором могут быть вложенные массивы, и возвращает новый массив, в котором
// все элементы являются плоским списком без вложенности.

const flattenArray = (array: any): any[] => {
  try {
    if (!Array.isArray(array)) throw new Error('not an array');
    if (!array.length) throw new Error('empty');

    return array.flat(Infinity);
  } catch (error: any) {
    return error.message;
  }
};

describe('', () => {
  test('', () => {
    expect(flattenArray([1, [2, 3, [4, [5]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  test('', () => {
    expect(flattenArray([])).toEqual('empty');
  });

  test('', () => {
    expect(flattenArray('')).toEqual('not an array');
  });
});
