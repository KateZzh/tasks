// Реализуйте функцию searchBinary, которая принимает 2 параметра: значение 3 и
// массив [1, 2, 3, 4, 5]. Функция возвращает индекс, где значение встречается в
// массиве, если найдено. Если значение не найдено, возвращается сообщение об
// ошибке.

const n = 9;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
count = 0;

function searchBinary(arr_, n_) {
  let start = 0;
  let end = arr_.length;

  for (let i = start; i < end; i++) {
    let middle = Math.round((start + end) / 2);
    count++;
    if (arr_[middle] === n_) {
      console.log('вы угадали ', middle);
      break;
    } else if (n_ > arr_[middle]) {
      start = middle;
    } else if (n_ < arr_[middle]) {
      end = middle;
    }
  }
}

searchBinary(arr, n);
console.log(count);