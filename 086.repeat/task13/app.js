// Реализуйте класс E с методом findIndexOfNegative, который принимает массив
// чисел в качестве аргумента и возвращает индекс первого отрицательного числа в
// массиве. Если отрицательных чисел нет, функция должна вернуть -1.

class E {
  findIndexOfNegative = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) return i;
    }

    return -1;
  };
}

const e = new E();

console.log(e.findIndexOfNegative([1, 2, -3, -4]));
