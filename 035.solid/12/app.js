// Реализуйте класс Sort, сдержащий метод sortData, сортирующий все числа
// статичного массива сортировкой пузырьком

class Sort {
  sortData(arr) {
    try {
      if (!this.isValid(arr))
        throw new Error("массив содержит не только числа");

      let sortArr = [...arr];

      for (let j = 0; j < sortArr.length; j++) {
        for (let i = 0; i < sortArr.length; i++) {
          if (sortArr[i] > sortArr[i + 1]) {
            let a = sortArr[i];
            sortArr[i] = sortArr[i + 1];
            sortArr[i + 1] = a;
          }
        }
      }

      console.log(sortArr);
    } catch (error) {
      console.log(error.message);
    }
  }

  isValid(arr) {
    const bool = arr.every((el) => typeof el === "number");
    return bool;
  }
}

const arr = [2, 5, 1, 3, 6, 4];

const sort = new Sort();
sort.sortData(arr);
