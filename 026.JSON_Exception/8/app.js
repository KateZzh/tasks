// . Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

const arr = ["O", "Q", "R", "S"].join("").toLowerCase();

function findLetter(arr_) {
  try {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const startIndex = alphabet.indexOf(arr_[0]);
    const newArrFindLetter = alphabet.slice(startIndex, startIndex + arr_.length + 1);
    let missingLetter = "";

    for (let i = 0; i < newArrFindLetter.length; i++) {
      if (newArrFindLetter[i] !== arr_[i]) {
        missingLetter = newArrFindLetter[i];
        break;
      }
    }

    const isValid = arr_.split("").every(function (el) {
      if (alphabet.indexOf(el) !== -1) {
        return true;
      } else throw new Error("the array contains not only letters");
    });

    if (isValid) return missingLetter;
  } catch (error) {
    return error.message;
  }
}

const missingLetter = findLetter(arr);
console.log(missingLetter);
