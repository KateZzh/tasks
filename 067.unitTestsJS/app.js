// 1. Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
// Добавить необходимые проверки.
// Написать тест для функции

function doDegree(a, b) {
  try {
    if (typeof a != "number" || typeof b != "number")
      throw new Error("arguments aren't numbers");
    return a ** b;
  } catch (error) {
    return error.message;
  }
}

// 2. Написать функцию которая принимает 2 числа и возвращает результат
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции

// function multiply(array) {
//   try {
//     if (!Array.isArray(array)) throw new Error("this not array");

//     if (array.length === 0) throw new Error("array is empty");

//     const data = array.filter((el) => {
//       if (typeof el != "number") return true;
//     });

//     if (data.length > 0) throw new Error("elements array not a number");

//     const res = array.reduce((sum, el) => {
//       return el * sum;
//     }, 1);
//     return res;
//   } catch (error) {
//     return error.message;
//   }
// }

function multiply(array) {
  try {
    if (!Array.isArray(array)) throw new Error("this not array");

    if (array.length === 0) throw new Error("array is empty");

    const data = array.some((el) => {
      if (typeof el != "number") throw new Error("elements array not a number");
    });

    const res = array.reduce((sum, el) => el * sum, 1);

    return res;
  } catch (error) {
    return error.message;
  }
}

// 3. Написать функцию которая принимает массив чисел и находит сумму всех
// элементов. Добавить необходимые проверки.
// Написать тест для функции

function doSum(array) {
  try {
    if (!Array.isArray(array)) throw new Error("this not array");

    if (array.length === 0) throw new Error("array is empty");

    const data = array.some((el) => {
      if (typeof el != "number") throw new Error("elements array not a number");
    });

    const res = array.reduce((sum, el) => el + sum, 0);

    return res;
  } catch (error) {
    return error.message;
  }
}

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции

function findProduct(arr) {
  try {
    let item = [];

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i].count != "number")
        throw new Error("count isn't a number");
      if (typeof arr[i].producer != "string")
        throw new Error("producer isn't a string");
      if (arr[i].count > 10 && arr[i].producer === "Германия") {
        item.push(arr[i]);
      }
    }
    return item;
  } catch (error) {
    return error.message;
  }
}

// 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

function doUnique(arr) {
  try {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (!/^\+[0-9]{12}/gm.test(arr)) throw new Error("incorrect number");
      if (!newArr.includes(arr[i])) newArr.push(arr[i]);
    }

    return newArr;
  } catch (error) {
    return error.message;
  }
}

// 6. На входе статичный объект. Необходимо посчитать количество пар (ключ:
//   значение) где значение число и вывести количество. Добавить необходимые
//   проверки.
//   Написать тест для функции

function doCount(obj) {
  try {
    if (Object.values(obj).length === 0) throw new Error("empty");

    const count = Object.values(obj).length;

    return count;
  } catch (error) {
    return error.message;
  }
}

// 7. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
// Написать тест для функции

function doubleValues(obj) {
  try {
    if (Object.values(obj).length === 0) throw new Error("empty");

    for (let key in obj) {
      if (typeof obj[key] !== "number") throw new Error("not a number");

      obj[key] = obj[key] * 2;
    }

    return obj;
  } catch (error) {
    return error.message;
  }
}

// 8. На входе статичный объект. Необходимо сформировать массив из всх четных
// значений объекта.
// Написать тест для функции

function doArrEvenVal(obj) {
  try {
    const arr = Object.values(obj);
    let newArr = [];

    if (!arr.length) throw new Error("empty");

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] != "number") throw new Error("element isn't a number");
      if (arr[i] % 2 == 0) newArr.push(arr[i]);
    }

    if (!newArr.length) throw new Error("array contains no even numbers");

    return newArr;
  } catch (error) {
    return error.message;
  }
}

// 9. На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить необходимые проверки.
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]
// Написать тест для функции

// 10. Реализуйте функцию, которая принимает в качестве параметра строку и
// возвращает массив без каких-либо элементов с одинаковым значением рядом
// друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции

function convertArr(str) {
  try {
    if (!str) throw new Error("empty");
    if (typeof str !== "string") throw new Error("not a string");

    const arr = str.split("");
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (newArr[newArr.length - 1] != arr[i] && !isNaN(arr[i]))
        newArr.push(+arr[i]);
      if (newArr[newArr.length - 1] != arr[i]) newArr.push(arr[i]);
    }

    return newArr;
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  doDegree,
  multiply,
  doSum,
  findProduct,
  doUnique,
  doCount,
  doubleValues,
  doArrEvenVal,
  convertArr,
};
